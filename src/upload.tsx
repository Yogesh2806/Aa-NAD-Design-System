import React, { useState, useRef, useId } from './react';
import { cx, Icon } from './util';

export type UploadFile = { id: string; name: string; size: number; type?: string; status: 'uploading' | 'done' | 'error'; progress?: number; error?: string; file?: File };
export type FileUploadProps = {
  label: string; helperText?: string; accept?: string; multiple?: boolean; maxSize?: number; maxFiles?: number; disabled?: boolean; error?: string;
  variant?: 'dropzone' | 'button'; capture?: 'user' | 'environment';
  files?: UploadFile[]; onFilesAdded?: (files: File[]) => void; onRemove?: (id: string) => void; onRetry?: (id: string) => void;
  upload?: (file: File, onProgress: (pct: number) => void) => Promise<void>; className?: string;
};
export const formatBytes = (n: number) => n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB` : `${(n / 1048576).toFixed(1)} MB`;
const matches = (f: File, accept?: string) => !accept || accept.split(',').map(s => s.trim().toLowerCase()).some(a =>
  a.startsWith('.') ? f.name.toLowerCase().endsWith(a) : a.endsWith('/*') ? (f.type || '').startsWith(a.slice(0, -1)) : f.type === a);
const iconFor = (t = '', n = '') => t.startsWith('image/') ? 'image' : t.startsWith('video/') ? 'videocam' : t.startsWith('audio/') ? 'musical-notes' : /\.(pdf|docx?|txt|md)$/i.test(n) || t.includes('pdf') ? 'document-text' : /\.(zip|rar|7z)$/i.test(n) ? 'archive' : 'document';
let seq = 0;

/** Pick or drop files; validates type, size and count; shows each file's progress, errors, retry and remove. */
export function FileUpload({ label, helperText, accept, multiple = true, maxSize, maxFiles, disabled, error, variant = 'dropzone', capture, files, onFilesAdded, onRemove, onRetry, upload, className }: FileUploadProps) {
  const [own, setOwn] = useState<UploadFile[]>([]); const list = files ?? own; const controlled = files !== undefined;
  const [over, setOver] = useState(false); const [notice, setNotice] = useState(''); const [announce, setAnnounce] = useState('');
  const input = useRef<any>(null); const trigger = useRef<any>(null); const id = useId(); const depth = useRef(0);
  const patch = (fid: string, p: Partial<UploadFile>) => setOwn(l => l.map(f => (f.id === fid ? { ...f, ...p } : f)));
  const run = (u: UploadFile) => {
    if (!upload || !u.file) return;
    upload(u.file, pct => patch(u.id, { progress: Math.round(pct) }))
      .then(() => { patch(u.id, { status: 'done', progress: 100 }); setAnnounce(`${u.name} uploaded`); })
      .catch((e: any) => { patch(u.id, { status: 'error', error: e?.message || 'Upload failed. Try again.' }); setAnnounce(`${u.name} failed to upload`); });
  };
const kind = (a: string) => { a = a.trim(); const m: any = { 'image/*': 'Images', 'video/*': 'Videos', 'audio/*': 'Audio' }; return m[a] || (a.startsWith('.') ? a.slice(1).toUpperCase() : (a.split('/')[1] || a).toUpperCase()); };
  const add = (incoming: File[]) => {
    if (disabled || !incoming.length) return;
    const room = maxFiles ? Math.max(0, maxFiles - list.length) : Infinity; const msgs: string[] = [];
    const take = (multiple ? incoming : incoming.slice(0, 1)).slice(0, room === Infinity ? undefined : room);
    if (take.length < incoming.length && maxFiles) msgs.push(`You can add up to ${maxFiles} file${maxFiles === 1 ? '' : 's'}.`);
    onFilesAdded?.(take);
    if (!controlled) {
      const made = take.map<UploadFile>(f => {
        const bad = !matches(f, accept) ? `This file type isn't accepted. Use ${accept!.split(',').map(kind).join(' or ')}.` : maxSize && f.size > maxSize ? `Larger than ${formatBytes(maxSize)}. Choose a smaller file.` : '';
        return { id: `f${++seq}`, name: f.name, size: f.size, type: f.type, file: f, status: bad ? 'error' : upload ? 'uploading' : 'done', progress: 0, error: bad || undefined };
      });
      setOwn(l => (multiple ? [...l, ...made] : made)); made.filter(u => u.status === 'uploading').forEach(run);
      const ok = made.filter(m => m.status !== 'error').length; setAnnounce(`${ok} file${ok === 1 ? '' : 's'} added${made.length - ok ? `, ${made.length - ok} rejected` : ''}`);
    }
    setNotice(msgs.join(' '));
  };
  const remove = (u: UploadFile) => { onRemove?.(u.id); if (!controlled) setOwn(l => l.filter(f => f.id !== u.id)); setAnnounce(`${u.name} removed`); trigger.current?.focus(); };
  const retry = (u: UploadFile) => { onRetry?.(u.id); if (!controlled && upload) { patch(u.id, { status: 'uploading', progress: 0, error: undefined }); run(u); } };
  const hint = [accept && accept.split(',').map(kind).join(', '), maxSize && `up to ${formatBytes(maxSize)}`, maxFiles && multiple && `max ${maxFiles} files`].filter(Boolean).join(' · ');
  const describedBy = [hint && `${id}-hint`, (error || helperText) && `${id}-msg`].filter(Boolean).join(' ') || undefined;
  const pick = () => input.current?.click();
  const dz = {
    onDragEnter: (e: any) => { e.preventDefault(); depth.current++; if (!disabled) setOver(true); },
    onDragOver: (e: any) => { e.preventDefault(); if (e.dataTransfer) e.dataTransfer.dropEffect = disabled ? 'none' : 'copy'; },
    onDragLeave: () => { if (--depth.current <= 0) { depth.current = 0; setOver(false); } },
    onDrop: (e: any) => { e.preventDefault(); depth.current = 0; setOver(false); add(Array.from(e.dataTransfer?.files || [])); },
  };
  return (
    <div className={cx('nad-field', 'nad-upload', error && 'is-invalid', disabled && 'is-disabled', className)}>
      <span className="nad-field__label" id={`${id}-l`}>{label}</span>
      <input ref={input} id={id} type="file" className="nad-sr" tabIndex={-1} accept={accept} multiple={multiple} capture={capture} disabled={disabled} aria-hidden="true"
        onChange={(e: any) => { add(Array.from(e.target.files || [])); e.target.value = ''; }} />
      {variant === 'dropzone' ? (
        <div className={cx('nad-upload__zone', over && 'is-over')} {...dz}>
          <span className="nad-upload__glyph" aria-hidden="true"><Icon name="cloud-upload" size={24} /></span>
          <p className="nad-upload__title">{over ? 'Drop to upload' : <>Drag files here or <button ref={trigger} type="button" className="nad-upload__browse" onClick={pick} disabled={disabled} aria-labelledby={`${id}-l ${id}-b`} aria-describedby={describedBy}><span id={`${id}-b`}>choose {multiple ? 'files' : 'a file'}</span></button></>}</p>
          {hint && <p className="nad-upload__hint" id={`${id}-hint`}>{hint}</p>}
        </div>
      ) : (
        <div className="nad-upload__bar" {...dz}>
          <button ref={trigger} type="button" className={cx('nad-btn', 'nad-btn--secondary', 'nad-btn--md', over && 'is-over')} onClick={pick} disabled={disabled} aria-describedby={describedBy}>
            <Icon name="attach" size={16} /><span className="nad-btn__label">{multiple ? 'Add files' : 'Choose a file'}</span></button>
          {hint && <span className="nad-upload__hint" id={`${id}-hint`}>{hint}</span>}
        </div>
      )}
      {(error || helperText) && <div className="nad-field__foot">{error ? <p id={`${id}-msg`} className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p> : <p id={`${id}-msg`} className="nad-field__help">{helperText}</p>}</div>}
      {notice && <p className="nad-field__error" role="alert"><Icon name="alert-circle" variant="filled" size={16} />{notice}</p>}
      {list.length > 0 && (
        <ul className="nad-upload__list nad-stagger" aria-label={`${label}: ${list.length} file${list.length === 1 ? '' : 's'}`}>
          {list.map(u => (
            <li key={u.id} className={cx('nad-upload__file', `is-${u.status}`)}>
              <span className="nad-upload__ficon" aria-hidden="true"><Icon name={u.status === 'error' ? 'alert-circle' : iconFor(u.type, u.name)} variant={u.status === 'error' ? 'filled' : 'outline'} size={20} /></span>
              <span className="nad-upload__meta">
                <span className="nad-upload__name" title={u.name}>{u.name}</span>
                <span className="nad-upload__sub">{u.status === 'error' ? <span className="nad-upload__err">{u.error || 'Upload failed.'}</span>
                  : u.status === 'uploading' ? <>{formatBytes(u.size)} · Uploading {u.progress ?? 0}%</> : <>{formatBytes(u.size)} · <Icon name="checkmark-circle" variant="filled" size={14} className="nad-upload__ok" /> Uploaded</>}</span>
                {u.status === 'uploading' && <span className="nad-progress__track nad-upload__track" role="progressbar" aria-label={`Uploading ${u.name}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={u.progress ?? 0}><span className="nad-progress__bar" style={{ width: `${u.progress ?? 0}%` }} /></span>}
              </span>
              {u.status === 'error' && (onRetry || (upload && u.file && !/type|Larger/.test(u.error || ''))) ? <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--sm" aria-label={`Retry ${u.name}`} onClick={() => retry(u)}><Icon name="refresh" size={16} /></button> : null}
              <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--sm" aria-label={`${u.status === 'uploading' ? 'Cancel' : 'Remove'} ${u.name}`} onClick={() => remove(u)} disabled={disabled}><Icon name={u.status === 'uploading' ? 'close' : 'trash'} size={16} /></button>
            </li>))}
        </ul>
      )}
      <span className="nad-sr" role="status" aria-live="polite">{announce}</span>
    </div>
  );
}
