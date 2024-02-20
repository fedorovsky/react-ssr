const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isDevelopment ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.client.json'),
            },
          },
        ],
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
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
