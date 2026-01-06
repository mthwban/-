
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // هذا السطر هو الأهم لعمل الموقع على GitHub Pages بدون شاشة سوداء
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
