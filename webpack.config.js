const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

const { GA_PROPERTY, CONTACT_FORM_URL } = process.env;

module.exports = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    devtool: argv.mode !== "production" ? "inline-source-map" : false,
    output: {
      path: path.resolve(__dirname, "dist"),
      clean: true,
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
      new webpack.DefinePlugin({
        CONTACT_FORM_URL: JSON.stringify(CONTACT_FORM_URL ?? ""),
      }),
      new HtmlWebpackPartialsPlugin({
        inject: GA_PROPERTY !== undefined && argv.mode === "production",
        path: "./analytics.html",
        location: "head",
        priority: "high",
        options: {
          ga_property_id: GA_PROPERTY,
        },
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
