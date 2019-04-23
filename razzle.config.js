const path = require('path');

module.exports = {
  plugins: ['typescript'],
  config.resolve = {
    alias: {
      '@/': path.resolve('./src')
    }
  };
};