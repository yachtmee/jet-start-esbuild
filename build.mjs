import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['./src/app.ts'],
  bundle: true,
  logLevel: "debug",
  minify: false,
  sourcemap: true,
  outfile: './codebase/app.js'
}).catch(() => process.exit(1))
