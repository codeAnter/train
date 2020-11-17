const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

module.exports = function () {
  // const isDev = argv.mode == "development";
  return {
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "./dist"),
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
      liveReload: true,
      inline: true,
      open: true,
      watchContentBase: true,
      watchOptions: {
        poll: true,
      },
      hot: true,
    },
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        { test: /\.jsx|\.js$/, exclude: /node_modules/, use: "babel-loader" },
        { 
          test: /\.css$/,
          include: [path.resolve(__dirname, 'src/index.css'), /node_modules/] ,
          use: ["style-loader", "css-loader"] 
        },
        { 
          test: /\.css$/,
          exclude: [path.resolve(__dirname, 'src/index.css'), /node_modules/] ,
          use: ["style-loader", "css-loader?modules", "postcss-loader"] 
        },      
        { 
          test: /\.less$/,
          include: [path.resolve(__dirname, 'src/index.less'), /node_modules/] ,
          use: ["style-loader", "css-loader", "less-loader"] 
        },
        { 
          test: /\.less$/,
          exclude: [path.resolve(__dirname, 'src/index.less'), /node_modules/] ,
          use: ["style-loader", "css-loader?modules", "postcss-loader", "less-loader"] 
        },     
        { test: /\.(woff|woff2|eot|ttf|otf|webp)$/, use: ["file-loader"] },
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
        inject: true,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  };
};
