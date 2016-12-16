import path from 'path'
import validate from 'webpack-validator'

const exclude = /node_modules\/(?!sync-store|sync-store-git)/

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
      'sync-components': 'packages/sync-components',
      'sync-store-git': 'packages/sync-store-git',
      'sync-store-settings': 'packages/sync-store-settings',
      'sync-electron': 'packages/sync-electron',
      'sync-plugin-branches': 'packages/sync-plugin-branches',
      'sync-plugin-jump-to-project': 'packages/sync-plugin-jump-to-project',
      'sync-plugin-projects': 'packages/sync-plugin-projects',
      'sync-store': 'packages/sync-store',
      'sync-theme-ui-dark': 'packages/sync-theme-ui-dark',
      'sync-store-ui': 'packages/sync-store-ui',
      'sync-window': 'packages/sync-window',
    },
    extensions: ['', '.js'],
  },
})
