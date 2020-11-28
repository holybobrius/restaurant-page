const path = require('path');

module.exports = {
    entry: ['./src/index.js',
    'webpack-plugin-serve/client'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Serve(options)
      ],
      watch: true  
};