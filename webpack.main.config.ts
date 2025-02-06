import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";
import * as path from "path";

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",

  /**
   * Output configuration
   */
  output: {
    path: path.resolve(__dirname, ".webpack/main"), // Output directory
    filename: "index.js", // Output file name
  },

  // Target Electron's main process
  target: "electron-main",

  // Module rules
  module: {
    rules,
  },

  // Plugins configuration
  plugins,

  // Resolve extensions
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },

  // Enable source maps for debugging
  devtool: "source-map",
};
