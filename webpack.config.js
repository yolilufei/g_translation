import path from "path";
const rootDir = path.resolve();

/** @type {Configuration} */
const config = {
  mode: "production",
  entry: {
    content_script: path.join(rootDir, "/src/scripts/content_script.ts"),
    background: path.join(rootDir, "/src/scripts/background.ts"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
};

export default config;
