
const path = require('path')

module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
  },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            query: {
                presets: ['react']
            }
          }
        }
      ]
    }
  };