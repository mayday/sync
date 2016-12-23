import _ from 'lodash'
import parse from 'parse-diff'
import { types as GIT, actions as git } from 'sync-store-git'

export const SELECT = 'PLUGIN/LOCAL_CHANGES/SELECT'
export const TOGGLE_STAGED = 'PLUGIN/LOCAL_CHANGES/TOGGLE_STAGED'
export const EDIT_MESSAGE = 'PLUGIN/LOCAL_CHANGES/EDIT_MESSAGE'
export const TOGGLE_ALL_FILES_STAGED = 'PLUGIN/LOCAL_CHANGES/TOGGLE_ALL_FILES_STAGED'

const initialState = {
  files: {},
  selected: '',
  message: '',
}

const file = (state = {}, action) => {
  const handler = {
    [TOGGLE_STAGED]: () => ({ ...state, staged: !state.staged }),
    [GIT.DIFF]: () => ({
      ...state,
      repo: action.path,
      // overwrite for deleted files
      path: action.file.to !== '/dev/null' ? action.file.to : action.file.from,
      chunks: action.file.chunks,
      staged: state.staged || true,
    }),
    [TOGGLE_ALL_FILES_STAGED]: () => ({
      ...state,
      staged: action.staged,
    }),
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
    [GIT.DIFF]: () => {
      const diff = parse(action.diff)
      const files = _.reduce(diff, (all, f) => {
        // eslint-disable-next-line no-param-reassign
        all[f.to] = file(all[f.to], { ...action, file: f })
        return all
      }, {})
      const first = diff.length ? diff[0].to : ''
      const selected = diff.length && _(diff).map('to').includes(state.selected)
        ? state.selected : first

      return { ...state, files, selected }
    },
    [GIT.COMMIT]: () => ({
      ...state,
      files: _.omit(state.files, action.files),
      message: '',
    }),
    [GIT.CHECKOUT]: () => ({
      ...state,
      files: _.omit(state.files, [action.args]),
    }),
    [TOGGLE_ALL_FILES_STAGED]: () => ({
      ...state,
      files: _.reduce(state.files, (all, f) => {
        // eslint-disable-next-line no-param-reassign
        all[f.path] = file(f, action)
        return all
      }, {}),
    }),
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  selectFile: path => ({ type: SELECT, path }),
  toggleStagedFile: path => ({ type: TOGGLE_STAGED, path }),
  editMessage: message => ({ type: EDIT_MESSAGE, message }),
  commit: (message, files) => (dispatch) => {
    dispatch(git.gitCommit(message, files))
  },
  refresh: () => (dispatch) => {
    dispatch(git.gitDiff())
  },
  discardChanges: path => (dispatch) => {
    dispatch(git.gitCheckout([path]))
  },
  toggleAllFilesStaged: staged => ({ type: TOGGLE_ALL_FILES_STAGED, staged }),
}

export const selectors = {
  getChangedFilesByRepo: (state, repo) => _.filter(state.files, { repo }),
  getSelectedFilePath: state => state.selected,
  getSelectedFile: state => state.files[selectors.getSelectedFilePath(state)] || {},
  getMessage: state => state.message,
}

export const windowOnFocus = (dispatch) => {
  dispatch(git.gitDiff())
}
