import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm'],
  clean: true,
  bundle: true,
  minify: false,
  noExternal: [/.*/], // Bundle all dependencies
  platform: 'node',
  target: 'node16',
});
