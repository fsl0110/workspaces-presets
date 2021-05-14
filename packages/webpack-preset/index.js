"use strict";

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const setRules = require("./rules");
const setPlugins = require("./plugins");

module.exports = function (argv) {
  const development = argv.mode === "development";
  const production = argv.mode === "production";
  const live = argv.env && argv.env.live;
  const swc = argv.env && argv.env.swc;
  const analyze = argv.env && argv.env.analyze;

  return {
    mode: development ? "development" : "production",
    entry: {
      entry: path.resolve("src/index"),
    },
    output: {
      path: path.resolve("build/"),
      filename: production
        ? "js/[name].[chunkhash].bundle.js"
        : "js/[name].bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      mainFields: ["browser", "main"],
    },
    devtool: development ? "inline-source-map" : "eval",
    stats: production ? "normal" : "minimal",
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "./build"),
      open: true,
      hot: true,
      port: 3000,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          },
        }),
      ],
      splitChunks: {
        chunks: "all",
        name: "vendors",
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(scss|css)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
      runtimeChunk: false,
    },
    module: {
      rules: setRules(development, production, live, swc),
    },
    plugins: setPlugins(development, production, analyze),
  };
};
