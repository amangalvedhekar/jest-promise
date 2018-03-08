const path = require('path');

module.exports = {
  // Specify the entry point for our app.
  entry: [
    path.join(__dirname, '/src/index.ts')
  ],

  devtool: 'inline-source-map',

  // Specify the output file containing our bundled code
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: 'commonjs'
  },

  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'ts-loader' },
          { loader: 'tslint-loader' }
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [{
      test: /\.json$/
    }]
  },

  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
}
