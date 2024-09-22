const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3001,
        proxy: "<PROJECT_URL>", // Placeholder for the script to replace
        https: true,
      },
      {
        reload: true,
      },
    ),
    new DashboardPlugin(),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 8080,
  },
});
