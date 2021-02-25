const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        // For webpack v5
        {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            // More information here https://webpack.js.org/guides/asset-modules/
            type: "asset",
        },
    ],
  },
};