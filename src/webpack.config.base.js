import path from 'path'
import validate from 'webpack-validator'

const exclude = /node_modules\/(?!sync-store|sync-git)/

export default validate({
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude,
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js'],
  },
})
