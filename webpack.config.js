const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/history-explorer-card.js',
  output: {
    filename: '../history-explorer-card.js',
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  plugins: [new ESLintPlugin({
    configType: 'flat',
    exclude: [
      'node_modules',
      'deps'
    ]
  })],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};