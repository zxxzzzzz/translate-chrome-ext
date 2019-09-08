const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      'frontEnd': './src/realtimeTranslation.js',
    },
    output: {
        filename: '[name].js',
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
        },
        {
          test: /\.(config|chromejs)$/,
          loader: 'file-loader',
          options: {
            name(file){
              if(file.split('.').slice(-1)[0] === 'config'){
                return '[name].json'
              } else {
                return '[name].js'
              }
            }
          },
        },
      ]
    },
    externals: {

    },
};
