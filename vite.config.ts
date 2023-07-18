import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true, port: 4000 },
  plugins: [
    react(),
    svgr(),
    checker({ eslint: { lintCommand: 'eslint src' }, overlay: false }),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      src: path.resolve('src/'),
      '@lenden': path.resolve('src'),
      '@lenden/pages': path.resolve('src/pages'),
      '@lenden/component': path.resolve('src/component'),
    },
  },
});
