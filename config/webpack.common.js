const environment = require("./environment");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    main: path.resolve(environment.paths.source, "js", "main.js"),
    alpine: "alpinejs",
  },
  output: {
    filename: "js/[name].[contenthash].js", // Add contenthash to JS filenames
    path: environment.paths.output,
    //path: path.resolve(__dirname, "../dist"), // Ensure the output is in /dist
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192, // 8kb
          },
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css", // Output CSS into the /dist/css folder
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.source, "images"),
          to: path.resolve(environment.paths.output, "images"),
        },
      ],
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json", // Output the manifest file
      //publicPath: "/dist/js/", // Adjust based on your setup
      publicPath: "/dist/", // Adjust based on your setup
    }),
  ],
};
