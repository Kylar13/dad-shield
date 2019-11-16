const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: {
    "extension/content": "./src/extension/content.tsx",
    "extension/background": "./src/extension/background.ts",
    "widget/widget": "./src/widget/Widget.tsx",
  },

  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.ts?$/, loader: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.svg$/, use: ["file-loader"] },
    ],
  },
};
