import _ from 'lodash'

const initialState = {
  files: {
    'packages/sync-state/index.js': {
      path: 'packages/sync-state/index.js',
      diff: '@@ -1,7 +1,7 @@',
      repo: '/Users/case/Github/sync',
    },
    'packages/sync-state/reducer.js': {
      path: 'packages/sync-state/reducer.js',
      diff: '@@ -1,7 +1,7 @@',
      repo: '/Users/case/Github/sync',
    },
    'packages/sync-state/selectors.js': {
      path: 'packages/sync-state/selectors.js',
      diff: '@@ -1,7 +1,7 @@',
      repo: '/Users/case/Github/sync',
    },
  },
  selected: 'packages/sync-state/index.js',
}
export const reducer = (state = initialState) => {
  return state
}

export const actions = {
  selectFile: path => console.log(path),
}

export const selectors = {
  getChangedFilesByRepo: (state, repo) => _.filter(state.files, { repo }),
  getSelectedFilePath: state => state.selected,
}
