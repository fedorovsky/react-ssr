const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: {
    app: './client.js',
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [],
};
