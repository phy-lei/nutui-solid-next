import { defineConfig } from 'vite'
import {resolve} from 'path'
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/buildEntry/lib-new.ts'),
      name: 'NutUIIcons',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['solid-js'],
      output: {
        dir: resolve(__dirname, './dist/lib/'),
      }
    }
  }
})
