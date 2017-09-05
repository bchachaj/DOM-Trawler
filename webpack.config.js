var path = require("path");

module.exports = {
  entry: "./lib/main.js",
  output: {
    path: __dirname,
    filename: "./lib/dom-trawler.js"
	},
	devtool: "source-map"
};
