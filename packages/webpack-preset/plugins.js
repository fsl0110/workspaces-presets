const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ObsoleteWebpackPlugin = require("obsolete-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = setPlugins = (development, production, analyze) => {
  return [
    production && new CleanWebpackPlugin(),
    production &&
      new CopyPlugin({
        patterns: [
          {
            from: "./public",
            globOptions: {
              ignore: ["**/index.html", "**/img", "**/favicon.ico"],
            },
          },
        ],
      }),
    development && new ReactRefreshWebpackPlugin(),
    production &&
      new MiniCssExtractPlugin({
        filename: "css/styles.[contenthash].css",
      }),
    production && new CssMinimizerPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    production &&
      new ObsoleteWebpackPlugin({
        name: "obsolete",
      }),
    production &&
      new ScriptExtHtmlWebpackPlugin({
        async: "obsolete",
      }),
    production &&
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    production &&
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    production &&
      analyze &&
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "../.analyze/report.html",
        generateStatsFile: true,
        statsFilename: "../.analyze/stats.json",
      }),
    production &&
      new PurgeCSSPlugin({
        paths: glob.sync("src/**/*", { nodir: true }),
        // whitelist is needed to keep body and html tag styles which are not part of the src path
        whitelist: ["body", "html"],
      }),
  ].filter(Boolean);
};
