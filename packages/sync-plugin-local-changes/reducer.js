import _ from 'lodash'
import parse from 'parse-diff'
import * as GIT from 'sync-store-git/repos'

export const SELECT = 'PLUGIN/LOCAL_CHANGES/SELECT'
export const TOGGLE_STAGED = 'PLUGIN/LOCAL_CHANGES/TOGGLE_STAGED'
export const EDIT_MESSAGE = 'PLUGIN/LOCAL_CHANGES/EDIT_MESSAGE'
export const COMMIT = 'PLUGIN/LOCAL_CHANGES/COMMIT'

const initialState = {
  files: {},
  selected: '',
  message: '',
}

const file = (state = {}, action) => {
  const handler = {
    [TOGGLE_STAGED]: () => ({ ...state, staged: !state.staged }),
    [GIT.DIFF_SUMMARY]: () => ({
      ...state,
      path: action.file.file,
      diff: action.file.file,
      repo: action.path,
      staged: state.staged || true,
    }),
    [GIT.DIFF]: () => ({
      ...state,
      chunks: action.file.chunks,
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
    [COMMIT]: () => {
      console.log('Message', action.commit.message) // eslint-disable-line no-console
      return { ...state, message: '' }
    },
    [GIT.DIFF_SUMMARY]: () => {
      const selected = action.diffSummary.files[0] && action.diffSummary.files[0].file
      const files = _.reduce(action.diffSummary.files, (all, f) => {
        // eslint-disable-next-line no-param-reassign
        all[f.file] = file(all[f.file], { ...action, file: f })
        return all
      }, state.files)

      return { ...state, files, selected }
    },
    [GIT.DIFF]: () => {
      const diff = parse(action.diff)
      const files = _.reduce(diff, (all, f) => {
        // eslint-disable-next-line no-param-reassign
        all[f.to] = file(all[f.to], { ...action, file: f })
        return all
      }, state.files)

      return { ...state, files }
    },
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  selectFile: path => ({ type: SELECT, path }),
  toggleStagedFile: path => ({ type: TOGGLE_STAGED, path }),
  editMessage: message => ({ type: EDIT_MESSAGE, message }),
  commit: (message, files) => ({ type: COMMIT, commit: { message, files } }),
  refresh: () => (dispatch) => {
    dispatch(GIT.actions.gitDiffSummary())
    dispatch(GIT.actions.gitDiff())
  },
}

export const selectors = {
  getChangedFilesByRepo: (state, repo) => _.filter(state.files, { repo }),
  getSelectedFilePath: state => state.selected,
  getSelectedFile: state => state.files[selectors.getSelectedFilePath(state)] || {},
  getMessage: state => state.message,
}
