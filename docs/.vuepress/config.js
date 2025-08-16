import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
 locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端编码规范',
      description: 'eva的前端规范工程化',
    },
  },
  base: '/spec-guide/',

  theme: defaultTheme({
    logo: '/img/logo.png',
    repo: 'evaplane/spec-guide',
    docsDir: 'docs',
    searchMaxSuggestions:10,
    navbar: [
     { text: '首页', link: '/index.md' },
     {
        text: '编码规范',
        children: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' },
        ],
      },
      {
        text: '工程规范',
        children: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        children: [
          { text: 'eslint-config', link: '/npm/eslint.md' },
          { text: 'stylelint-config', link: '/npm/stylelint.md' },
          { text: 'commitlint-config', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin', link: '/npm/eslint-plugin.md' },
        ]
      },
      {
        text: '脚手架',
        children: [{ text: 'eva-lint', link: '/cli/encode-fe-lint.md' }],
      },
    ],
    sidebar: [
      {
        text: '编码规范',
        collapsible:true,
        children: [
          {
            text: 'HTML 编码规范',
            link: '/coding/html.md',
          },
          {
            text: 'CSS 编码规范',
            link: '/coding/css.md',
          },
          {
            text: 'JavaScript 编码规范',
            link: '/coding/javascript.md',
          },
          {
            text: 'Typescript 编码规范',
            link: '/coding/typescript.md',
          },
          {
            text: 'Node 编码规范',
            linkpath: '/coding/node.md',
          },
        ],
      },
      {
        text: '工程规范',
        collapsible:true,
        children: [
          {
            text: 'Git 规范',
            link: '/engineering/git.md',
          },
          {
            text: '文档规范',
            link: '/engineering/doc.md',
          },
          {
            text: 'CHANGELOG 规范',
            link: '/engineering/changelog.md',
          },
        ],
      },
      {
        text: 'NPM包',
        collapsible:true,
        children: [
          { text: 'eslint-config-encode', link: '/npm/eslint.md' },
          { text: 'stylelint-config-encode', link: '/npm/stylelint.md' },
          { text: 'commitlint-config-encode', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config-encode', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin-encode', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        collapsible:true,
        children: [{ text: 'encode-fe-lint', link: '/cli/encode-fe-lint.md' }],
      },
    ],
    // sidebar:'heading',
    footer: {
      createYear: 2025,
      copyrightInfo:
        'encode studio | <a href="https://github.com/evaplane/spec-guide" target="_blank">github</a>',
    },
    extendFrontmatter: {
      author: {
        name: 'eva',
        link: 'https://github.com/evaplane/spec-guide',
      },
    },
  }),
  head: [
    ['link', { rel: 'icon', href: '/spec-guide/img/logo.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范工程化',
      },
    ],
  ],
  bundler: webpackBundler(),
  plugins: [
    searchPlugin({
       // 配置项
       locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})
