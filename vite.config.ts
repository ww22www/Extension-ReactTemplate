import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ExtensionTemplate',
      fileName: 'index',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
      },
    },
    // // npm install -D tarser
    // minify: 'terser',
    // terserOptions: {
    //     format: {
    //         comments: false,
    //     },
    // },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
