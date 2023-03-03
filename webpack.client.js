const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['src', 'node_modules'],
  },
  entry: {
    app: path.resolve(__dirname, 'src/client.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'client.js',
    publicPath: `/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [],
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
