import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jenkins-vite-test/', // 基础路径
  plugins: [vue()],
})
