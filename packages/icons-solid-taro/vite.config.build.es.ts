import { defineConfig } from 'vite'
import { resolve } from 'path'
import solidPlugin from './plugin/vite-plugin-solid'
import { iconsConfig } from './src/components/iconsConfig'

let input = {
  IconFont: `./src/IconFont.tsx`,
  configure: `./src/configure.ts`,
  internal: `./src/internal.ts`,
  IconFontConfig: `./src/buildEntry/iconFontConfig.ts`,
  SvgConfig: `./src/buildEntry/svgConfig.ts`,
} as any;

iconsConfig.map((name) => {
  input[name] = `./src/components/${name}.tsx`;
});

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
      entry: input,
      formats: ['es']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['solid-js', 'solid-js/web', 'solid-js/h', './internal', './configure'],
      // input,
      output: {
        paths: (id) => {
          return /internal/.test(id)
            ? `./internal.js`
            : id
        },
        entryFileNames: '[name].js',
        dir: resolve(__dirname, './dist/es/icons'),
      }
    }
  }
})
