import { defineConfig } from 'vite'
import path from 'path'
import atImport from 'postcss-import'
import config from './package.json'


const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/`

const { resolve } = path
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";`,
      },
      postcss: {
        plugins: [atImport({ path: path.join(__dirname, 'src`') })],
      },
    },
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        banner,
      },
    },
    lib: {
      entry: './src/styles/default.scss',
      formats: ['es'],
      name: 'style',
      fileName: 'style',
    },
  },
})
