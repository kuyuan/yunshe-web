const path = require('path');

module.exports = {
  plugins: ['typescript'],
  modify: (config, { target, dev }) => {
    config.resolve = {
      alias: {
        '@/': path.resolve('./src')
      }
    };
    return config;
  }
};