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
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    static: path.resolve(__dirname, "dist"),
    // host: "192.168.0.2",
    port: 7000,
    hot: true,
  },
};
