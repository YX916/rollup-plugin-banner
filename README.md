<div align="center">

# 🚀 Welcome to use @yang-yong-xin/rollup-plugin-banner
[![npm version](https://img.shields.io/npm/v/@yang-yong-xin/util.svg?style=flat-square)](https://www.npmjs.org/package/@yang-yong-xin/util)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@yang-yong-xin/util&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@yang-yong-xin/util)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@yang-yong-xin/util?style=flat-square)](https://bundlephobia.com/package/@yang-yong-xin/util@latest)
[![npm downloads](https://img.shields.io/npm/dm/@yang-yong-xin/util.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@yang-yong-xin/util)
[![npm license](https://img.shields.io/npm/l/@yang-yong-xin/util.svg?style=flat-square)](https://img.shields.io/npm/l/@yang-yong-xin/util.svg?style=flat-square)

</div>

## 安装
```bash
npm i -D @yang-yong-xin/rollup-plugin-banner
```
## 引入
```js
/* rollup.config.js */
import RollupBanner from '@yang-yong-xin/rollup-plugin-banner';
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