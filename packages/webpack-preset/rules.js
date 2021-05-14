const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = setRules = (development, production, live, swc) => {
  return [
    {
      test: /\.(ts|tsx)?$/,
      include: path.resolve("src"),
      exclude: /node_modules/,
      use: [
        development && {
          loader: "babel-loader",
          options: { plugins: ["react-refresh/babel"] },
        },
        development && {
          loader: "ts-loader",
          options: { transpileOnly: true },
        },
        production &&
          swc && {
            loader: "swc-loader",
            options: {
              sync: true,
              env: { mode: "usage", coreJs: 3, debug: true },
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                  dynamicImport: true,
                },
                target: "es5",
                loose: true,
              },
            },
          },
        production && {
          loader: "babel-loader",
          options: {
            plugins: [
              live && [
                "react-remove-properties",
                {
                  properties: ["data-testid"],
                },
              ],
            ].filter(Boolean),
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  debug: true,
                  corejs: 3,
                },
              ],
              "@babel/preset-react",
              [
                "@babel/preset-typescript",
                {
                  // this is important for proper files watching by fork-ts-checker-webpack-plugin
                  onlyRemoveTypeImports: true,
                },
              ],
            ],
          },
        },
      ].filter(Boolean),
    },
    {
      test: /\.css$/,
      include: path.resolve("src"),
      use: [
        production ? MiniCssExtractPlugin.loader : "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "autoprefixer",
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      include: path.resolve("src"),
      use: [
        production ? MiniCssExtractPlugin.loader : "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "autoprefixer",
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      include: path.resolve("public/img"),
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img/",
          },
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /node_modules/,
      include: path.resolve("public/fonts"),
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      ],
    },
  ];
};
