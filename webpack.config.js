const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    devtool: argv.mode !== "production" ? "inline-source-map" : false,
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    optimization: {
      runtimeChunk: "single",
    },
    module: {
      rules: [
        {
          test: /\.(webp|gif|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.less$/i,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: {
                  auto: true,
                  localIdentName: "[local]___[hash:base64:5]",
                },
              },
            },
            {
              loader: "less-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      static: "./dist",
      port: 3000,
      historyApiFallback: {
        index: "/index.html",
      },
    },
  };
};
