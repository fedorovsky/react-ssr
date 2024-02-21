module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.22',
        // debug: true,
        targets: {
          chrome: '62',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [],
  comments: true,
  sourceMaps: true,
};
