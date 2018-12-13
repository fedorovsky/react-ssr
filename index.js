require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/env', '@babel/react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
require('./src/server');
