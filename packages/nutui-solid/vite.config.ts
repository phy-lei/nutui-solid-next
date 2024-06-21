import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import fse from 'fs-extra'
import path from 'path'
import config from './package.json'
import solidPlugin from './plugin/vite-plugin-solid'

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/`

const { resolve } = path

let fileStr = `@import "@/styles/variables.scss";`
const projectID = process.env.VITE_APP_PROJECT_ID
if (projectID) {
  fileStr = `@import '@/styles/variables-${projectID}.scss';`
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  plugins: [
    solidPlugin(),
    dts({
      outDir: 'dist/types',
      clearPureImport: false,
      include: [
        "src/components/nutui.solid.build.ts",
        "src/components/**/*.ts",
        "src/components/**/*.tsx",
      ],
      exclude: [
        'node_modules/**',
        'src/components/**/demos/**',
        'src/**/*.spec.tsx',
        'plugin/**'
      ],
      beforeWriteFile(filePath, content) {
        return { filePath: filePath.replace('src/', ''), content }
      },
      afterBuild: () => {
        fse
          .readFile('./dist/types/nutui.solid.build.d.ts', 'utf-8')
          .then((data: string) => {
            fse.remove('./dist/types/nutui.solid.build.d.ts')
            fse.outputFile(
              './dist/types/index.d.ts',
              `${data.replace(/\.\.\//g, './')}`
            )
          })
      },
    }),
  ],
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['solid-js'],
      output: [
        {
          banner,
          globals: {
            solidJs: 'solidJs',
          },
          format: 'es',
          entryFileNames: 'nutui.solid.es.js',
        },
        {
          banner,
          globals: {
            solidJs: 'solidJs',
          },
          name: 'nutui.solid',
          format: 'umd',
          entryFileNames: 'nutui.solid.umd.js',
        },
      ],
    },
    lib: {
      entry: 'src/components/nutui.solid.build.ts',
    },
  },
})
