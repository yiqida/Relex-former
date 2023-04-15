const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        "@": resolve("src"), // 这样配置后 @ 可以指向 src 目录
        "common": resolve("src/common")
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      require("unplugin-element-plus/webpack")({
        // options
      }),
    ],
  },
});
