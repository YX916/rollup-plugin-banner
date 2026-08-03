<div align="center">

# 🚀 Welcome to use @yyx916/rollup-plugin-banner

[![npm version](https://img.shields.io/npm/v/@yyx916/rollup-plugin-banner.svg?style=flat-square)](https://www.npmjs.org/package/@yyx916/rollup-plugin-banner)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@yyx916/rollup-plugin-banner&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@yyx916/rollup-plugin-banner)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@yyx916/rollup-plugin-banner?style=flat-square)](https://bundlephobia.com/package/@yyx916/rollup-plugin-banner@latest)
[![npm downloads](https://img.shields.io/npm/dm/@yyx916/rollup-plugin-banner.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@yyx916/rollup-plugin-banner)
[![npm license](https://img.shields.io/npm/l/@yyx916/rollup-plugin-banner.svg?style=flat-square)](https://img.shields.io/npm/l/@yyx916/rollup-plugin-banner.svg?style=flat-square)

</div>

## 安装

```bash
npm i -D @yyx916/rollup-plugin-banner
```

## 引入

```js
/* rollup.config.js */
import RollupBanner from "@yyx916/rollup-plugin-banner";
```

## 使用

```js
/* rollup.config.js */
plugins: [
  ...,
  RollupBanner({
    header: `/* header content */`,
    footer: '/* footer content */'
  })
]
```
