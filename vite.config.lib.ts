// vite.config.lib.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      outDir: 'dist',
      entryRoot: 'src',
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'QwikMaterialUI',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['@builder.io/qwik', '@builder.io/qwik/jsx-runtime'],
      output: {
        dir: 'dist',
        assetFileNames: 'styles.[ext]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, 'src/styles')],
        additionalData: `@import "_variables.scss";`,
      },
    },
  },
});
