import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    mdx(),
    solidJs(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://shiki.style/themes
      theme: 'dracula',
      // 另外，也提供了多种主题
      // 查看下面关于使用亮/暗双主题的的说明
      themes: {
        light: 'github-light',
        dark: 'github-light',
      },
      // 添加自定义语言
      // 注意：Shiki 内置了无数语言，包括 .astro！
      // https://shiki.style/languages
      langs: [],
      // 启用自动换行，以防止水平滚动
      wrap: true,
      // 添加自定义转换器：https://shiki.style/guide/transformers
      // 查找常用转换器：https://shiki.style/packages/transformers
      transformers: [],
    },
    remarkPlugins: [remarkGfm, remarkDirective],
  },
})
