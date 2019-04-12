const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CheckerPlugin } = require('awesome-typescript-loader');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/server.js'),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.css'],
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
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]-[local]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: ['node ./dist/server.js'],
    }),
  ],
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
