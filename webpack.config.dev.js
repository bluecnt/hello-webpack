const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/main.ts",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // TypeScript debugging
    devtoolModuleFilenameTemplate: "[resource-path]", // Removes the webpack:/// prefix
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 7000,
  },
};
