import { build } from 'esbuild';
import pkg from 'replace-in-file';
const { sync } = pkg;
const contracts = ['/contracts/contract.ts'];

build({
  entryPoints: contracts.map((source) => {
    return `./src${source}`;
  }),
  outdir: './dist',
  minify: false,
  bundle: true,
  format: 'iife',
})
  .catch(() => process.exit(1))
  // note: Warp SDK currently does not support files in IIFE bundle format, so we need to remove the "iife" part ;-)
  // update: it does since 0.4.31, but because viewblock.io is still incompatibile with this version, leaving as is for now.
  .finally(() => {
    const files = contracts.map((source) => {
      return `./dist${source}`.replace('.ts', '.js');
    });
    sync({
      files: files,
      from: [/\(\(\) => {/g, /}\)\(\);/g],
      to: '',
      countMatches: true,
    });
  });