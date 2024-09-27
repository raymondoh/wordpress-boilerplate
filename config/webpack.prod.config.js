// const { merge } = require("webpack-merge");
// const commonConfig = require("./webpack.common");
// const TerserPlugin = require("terser-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// module.exports = merge(commonConfig, {
//   mode: "production",
//   devtool: false, // Disable source maps in production
//   optimization: {
//     minimizer: [
//       new TerserPlugin({
//         parallel: true,
//         terserOptions: {
//           format: {
//             comments: false, // Remove comments in production
//           },
//         },
//         extractComments: false, // Prevent extracting comments into a separate file
//       }),
//     ],
//   },
//   plugins: [
//     new BundleAnalyzerPlugin({
//       analyzerMode: process.env.ANALYZE ? "server" : "disabled", // Only open if ANALYZE=true
//       openAnalyzer: process.env.ANALYZE === "true",
//     }),
//   ],
// });
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: false, // Disable source maps in production
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false, // Remove comments in production
          },
        },
        extractComments: false, // Prevent extracting comments into a separate file
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? "server" : "disabled", // Only run analyzer if ANALYZE=true
      openAnalyzer: process.env.ANALYZE === "true",
      analyzerPort: 9999, // Change to a different port to avoid MAMP conflict
    }),
  ],
});
