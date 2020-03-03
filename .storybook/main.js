const path = require('path');

module.exports = {
    webpackFinal: async (config) => {
        // Alias the @/
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve('src')
        }
    
        return config;
      },
};