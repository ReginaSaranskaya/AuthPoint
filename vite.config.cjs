import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': resolve(__dirname, './src/') },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
        additionalData: `@use '@/shared/styles/_fonts' as *;`
      }
    }
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: ({ name }) => {
  //         if (/\.(woff|woff2)$/.test(name ?? '')) {
  //           return 'fonts/[name][extname]';
  //         }
  //         return 'assets/[name][extname]';
  //       },
  //     },
  //   },
  // },
});
