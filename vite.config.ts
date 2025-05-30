import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [qwikVite(), tsconfigPaths(), dts({
      outDir: 'dist', // Generate types to dist
      entryRoot: 'src', // Optional, defaults to 'src'
    }),],
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
    outDir: 'dist', 
    emptyOutDir: true, 
  },
});