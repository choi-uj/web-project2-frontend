import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web-project2-frontend/',
  server: {
    proxy: {
      '/api': 'http://localhost:8500',  // 백엔드 서버 API 경로 설정
    },
  },
})
