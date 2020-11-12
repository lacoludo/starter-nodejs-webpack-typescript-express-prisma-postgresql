const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server.ts',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './')
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node'
}
