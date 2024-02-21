const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isDevelopment ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.mjs'],
    modules: [
      'node_modules',
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
  },
  entry: {
    client: path.resolve(__dirname, 'src', 'client.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs)$/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules', '@reduxjs/toolkit'),
          path.resolve('node_modules', 'immer'),
          path.resolve('node_modules', 'reselect'),
          path.resolve('node_modules', 'react-redux'),
        ],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          configFile: require.resolve('./babel.config.js'),
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist', 'public'),
        },
      ],
    }),
    isProduction &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false },
      }),
  ].filter(Boolean),
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
