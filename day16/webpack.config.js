const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env, argv) {
  const isDev = argv.mode == "development";
  return {
    mode: argv.mode ? argv.mode : "production",
    devtool: isDev ? "source-map" : "cheap-module-source-map",
    devServer: {
      contentBase: "./dist",
      proxy: {
        "/api/store": {
          target: "https://www.wshopnow.com",
          changeOrigin: true,
        },
        "/search": {
          target: "https://api.github.com",
          changeOrigin: true,
        },
      },
    },
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        { test: /\.jsx|\.js$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
    ],
  };
};
