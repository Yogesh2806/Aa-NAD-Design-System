// Build the browser bundle (window.AaNAD) from src/, and refresh the docs site copy.
// Usage: npm install && npm run build
import { build } from 'esbuild';
import { cpSync, mkdirSync } from 'node:fs';

await build({
  entryPoints: ['src/entry.ts'], bundle: true, format: 'iife', minify: true, target: 'es2019',
  jsx: 'transform', jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment',
  outfile: 'dist/aa-nad.js',
  banner: { js: '/*! Aa NAD Design System v1.2.0 | MIT | Ionicons 8 (MIT) included */' },
});
mkdirSync('docs/lib', { recursive: true });
for (const f of ['dist/aa-nad.js', 'dist/aa-nad.css', 'tokens/tokens.css']) cpSync(f, 'docs/lib/' + f.split('/').pop());
console.log('Built dist/aa-nad.js and refreshed docs/lib');
