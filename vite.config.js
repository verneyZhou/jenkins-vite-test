import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

const env = process.env.ENV || ''; // 环境


export default ({command, mode}) => {

  console.log('command', command, mode, env)
  return defineConfig({
    base: env ? `/jenkins-vite-test/${env}/` : '/jenkins-vite-test/', // 基础路径
    plugins: [vue()],
  })
}