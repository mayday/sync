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
    root: path.join(__dirname, '..'),
    alias: {
      'redux-git-middleware': 'packages/redux-git-middleware',
      'sync-git': 'packages/sync-git',
      'sync-settings': 'packages/sync-settings',
      'sync-store': 'packages/sync-store',
      'sync-ui': 'packages/sync-ui',
      'sync-window': 'packages/sync-window',
    },
    extensions: ['', '.js'],
  },
})
