const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/server.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['src', 'node_modules'],
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  stats: {
    colors: true,
    modules: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    env: true,
    children: false,
  },
};
