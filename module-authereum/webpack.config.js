const path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'enslogin-module-authereum/60/js',
    library: 'enslogin-module-authereum',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include: [ path.resolve(__dirname, "dist") ]
        // exclude: [ path.resolve(__dirname, "node_modules") ],
        loader: 'babel-loader'
      }
    ]
  },
  node: { crypto: true, stream: true, fs: 'empty', net: 'empty' }
}
