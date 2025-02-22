import { defineConfig } from 'vite'
import { resolve } from 'path'
import solidPlugin from './plugin/vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [solidPlugin({
    solid: {
      moduleName: '@tarojs/plugin-framework-solid/dist/reconciler',
      generate: 'universal',
      uniqueTransform: true,
    }
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/buildEntry/lib-new.ts'),
      name: 'NutUIIcons',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['solid-js', 'solid-js/web', 'solid-js/h', '@tarojs/plugin-framework-solid/dist/reconciler', './internal', './configure'],
      output: {
        dir: resolve(__dirname, './dist/lib/'),
      }
    }
  }
})
