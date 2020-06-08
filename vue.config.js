const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: config => {
    config.resolve = {
      extensions: [".js", ".vue", ".json", ".css"],
      alias: {
        "@": resolve("src"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
