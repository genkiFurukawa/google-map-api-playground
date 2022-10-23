# google-map-playground

## 概要

-   地図とリストを表示して動きを連動させるための素振りのリポジトリ
    -   ![](./img/完成イメージ.JPG)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## GoogleMap の導入

```
$ yarn add -D @types/google.maps
$ yarn add @googlemaps/js-api-loader
```

### 参考

-   https://developers.google.com/maps/documentation/javascript/using-typescript
-   https://developers.google.com/maps/documentation/javascript/overview#js_api_loader_package

## パフォーマンス関連

-　[塵も積もれば山となる、Vue.js 製スプレッドシートのパフォーマンス改善記](https://tech.andpad.co.jp/entry/2020/04/28/172129)

-   [Vue 2 で大きなデータを扱うときの性能改善手法](https://tech.stockmark.co.jp/blog/vue2_performance_with_bigdata/)
-   [Vue.js でお手軽実装！無限スクロールを実装する 2 つの方法](https://tech.bita.jp/article/41)
