const path = require('path');

module.exports = {
  entry: {
    index: './index.ts'
  },
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development' 
};
