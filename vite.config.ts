import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';


export default defineConfig({
  plugins: [qwikVite(), tsconfigPaths()],
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
        assetFileNames: 'styles.[ext]', // Outputs compiled SCSS to dist/styles.css
      },
    },
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