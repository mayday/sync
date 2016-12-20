import _ from 'lodash'

export const SELECT = 'PLUGIN/LOCAL_CHANGES/SELECT'
export const TOGGLE_STAGED = 'PLUGIN/LOCAL_CHANGES/TOGGLE_STAGED'
export const EDIT_MESSAGE = 'PLUGIN/LOCAL_CHANGES/EDIT_MESSAGE'
export const COMMIT = 'PLUGIN/LOCAL_CHANGES/COMMIT'

const initialState = {
  files: {
    'packages/sync-state/index.js': {
      path: 'packages/sync-state/index.js',
      diff: 'packages/sync-state/index.js',
      repo: '/Users/case/Github/sync',
      staged: true,
    },
    'packages/sync-state/reducer.js': {
      path: 'packages/sync-state/reducer.js',
      diff: 'packages/sync-state/reducer.js',
      repo: '/Users/case/Github/sync',
      staged: true,
    },
    'packages/sync-state/selectors.js': {
      path: 'packages/sync-state/selectors.js',
      diff: 'packages/sync-state/selectors.js',
      repo: '/Users/case/Github/sync',
      staged: true,
    },
  },
  selected: 'packages/sync-state/index.js',
  message: '',
}

const file = (state, action) => {
  const handler = {
    [TOGGLE_STAGED]: () => ({ ...state, staged: !state.staged }),
  }[action.type]
  return handler ? handler() : state
}

export const reducer = (state = initialState, action) => {
  const handler = {
    [SELECT]: () => ({ ...state, selected: action.path }),
    [TOGGLE_STAGED]: () => ({
      ...state,
      files: {
        ...state.files,
        [action.path]: file(state.files[action.path], action),
      },
    }),
    [EDIT_MESSAGE]: () => ({ ...state, message: action.message }),
    [COMMIT]: () => {
      console.log('Message', action.commit.message)
      return { ...state, message: '' }
    },
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  selectFile: path => ({ type: SELECT, path }),
  toggleStagedFile: path => ({ type: TOGGLE_STAGED, path }),
  editMessage: message => ({ type: EDIT_MESSAGE, message }),
  commit: (message, files) => ({ type: COMMIT, commit: { message, files } }),
}

export const selectors = {
  getChangedFilesByRepo: (state, repo) => _.filter(state.files, { repo }),
  getSelectedFilePath: state => state.selected,
  getSelectedDiff: state => state.files[selectors.getSelectedFilePath(state)].diff,
  getMessage: state => state.message,
}
