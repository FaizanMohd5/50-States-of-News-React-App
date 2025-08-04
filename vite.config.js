// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/50-States-of-News-React-App/',
  plugins: [react()]
})
