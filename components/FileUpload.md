# FileUpload

Lets people choose or drag in files, checks them, and shows each file's progress, errors, retry and remove.

**Use when** attaching documents, images or media to a form or message.

**Don't** hide the rules: always show accepted types and the size limit before the upload, not only in the error.

**You provide** `label`, `accept` (e.g. `"image/*,.pdf"`), `multiple` (default true), `maxSize` (bytes), `maxFiles`, `variant` (`dropzone` default, `button` for tight spaces), `capture` (mobile camera), `helperText`, `error`, `disabled`. Either pass `upload(file, onProgress)` returning a Promise and the component runs uploads, progress, errors and retry itself, or control it fully with `files` (`{id,name,size,type,status: uploading|done|error,progress,error}`), `onFilesAdded`, `onRemove` and `onRetry`.

**Accessibility** The real `<input type="file">` is triggered by a visible button (“choose files”), so keyboard and screen-reader users never need to drag. Accepted types and limits are linked with `aria-describedby`. Each file has a named progress bar, and errors are written out in words with an icon (“Larger than 10 MB. Choose a smaller file.”), never shown by a red border alone. Adds, rejections, completions and removals are announced politely, and limit violations as an alert. Remove and retry buttons name the file.

**Mobile** Tapping opens the system picker (Photos, Files, Camera); set `capture` to go straight to the camera. Drag and drop is a desktop enhancement only. Rows are 52px tall with 32px icon buttons inside a full-width tap area.

Motion: the dropzone border turns solid and the zone grows 1% while a file is dragged over it, the cloud icon lifts 4px, new rows fade up in a stagger, and progress bars ease.
