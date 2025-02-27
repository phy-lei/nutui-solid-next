import { defineConfig } from 'vite'
import solidPlugin from './plugin/vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin({
    solid: {
      moduleName: '@tarojs/plugin-framework-solid/dist/reconciler',
      generate: 'universal',
      uniqueTransform: true,
    }
  })],
})
