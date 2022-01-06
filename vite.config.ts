import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import viteSSR from 'vite-ssr/plugin.js'

export default () => {
  const srcPath = path.resolve(process.cwd(), 'src')
  const plugins = [
    vue(),
    viteSSR(),
  ]

  // https://vitejs.dev/config/
  return defineConfig({
    plugins,
    resolve: {
      alias: [
        { find: '@', replacement: srcPath },
        { find: '~', replacement: '/node_modules' },
      ],
    },
    server: {
      https: true,
    },
  })
}
