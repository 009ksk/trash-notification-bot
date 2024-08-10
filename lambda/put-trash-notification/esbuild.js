import { build } from 'esbuild';
import { sync } from 'glob';

const entryPoints = sync('src/**/*.ts');

// esbuildのビルド設定
build({
  entryPoints: entryPoints,
  outdir: 'dist',
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'es2020'
}).catch(() => process.exit(1));
