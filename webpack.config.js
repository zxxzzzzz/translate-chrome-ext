const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/realtimeTranslation.js',
    output: {
        filename: 'frontEnd.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    externals: {

    },
};
