import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build',
    rollupOptions: {
      input: {
        // app: '/index.html',
        main: resolve(__dirname, './index.html'),
        // nested: resolve(__dirname, 'nested/index.html')
      }
    }
  }
})


