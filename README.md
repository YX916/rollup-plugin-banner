<div align="center">

# 🚀 Welcome to use @yyxislucky/rollup-plugin-banner
[![npm version](https://img.shields.io/npm/v/@yyxislucky/rollup-plugin-banner.svg?style=flat-square)](https://www.npmjs.org/package/@yyxislucky/rollup-plugin-banner)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@yyxislucky/rollup-plugin-banner&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@yyxislucky/rollup-plugin-banner)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@yyxislucky/rollup-plugin-banner?style=flat-square)](https://bundlephobia.com/package/@yyxislucky/rollup-plugin-banner@latest)
[![npm downloads](https://img.shields.io/npm/dm/@yyxislucky/rollup-plugin-banner.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@yyxislucky/rollup-plugin-banner)
[![npm license](https://img.shields.io/npm/l/@yyxislucky/rollup-plugin-banner.svg?style=flat-square)](https://img.shields.io/npm/l/@yyxislucky/rollup-plugin-banner.svg?style=flat-square)

</div>

## 安装
```bash
npm i -D @yyxislucky/rollup-plugin-banner
```
## 引入
```js
/* rollup.config.js */
import RollupBanner from '@yyxislucky/rollup-plugin-banner';
```
## 使用
```js
/* rollup.config.js */
plugins: [
  ...,
  RollupBanner({
    banner: `/* banner content */`,
    footer: '/* footer content */'
  })
]
```