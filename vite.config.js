import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8500',
        rewrite: (path) => path.replace(/^\/api/, '')  // '/api' 접두사 제거
      }
    }
  },
})

