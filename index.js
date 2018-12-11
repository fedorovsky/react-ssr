require('@babel/register')({
  presets: ['@babel/env', '@babel/react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
require('./src/server');
