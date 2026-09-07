import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'src/js/app.js'),
      },
    },
  },
})