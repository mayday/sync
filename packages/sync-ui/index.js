export const CHANGE_ACTIVE_REPO = 'UI/CHANGE_ACTIVE_REPO'
export const CHANGE_FILE_SELECTED = 'UI/CHANGE_FILE_SELECTED'
export const CHANGE_COMMIT_MESSAGE = 'UI/CHANGE_COMMIT_MESSAGE'

const initialState = {
  activeRepo: '/Users/case/Github/sync', // TODO: REMOVE
  fileSelected: '',
  commitMessage: '',
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_REPO:
      return { ...state, activeRepo: action.path }
    case CHANGE_FILE_SELECTED:
      return { ...state, fileSelected: action.path }
    case CHANGE_COMMIT_MESSAGE:
      return { ...state, commitMessage: action.message }
    default: return state
  }
}

export const actions = {
  changeActiveRepo: path => ({ type: CHANGE_ACTIVE_REPO, path }),
  setFileSelectedDiff: path => ({ type: CHANGE_FILE_SELECTED, path }),
  changeCommitMessage: message => ({ type: CHANGE_COMMIT_MESSAGE, message }),
}

export const selectors = {
  getActiveRepo: state => state.activeRepo,
  getFileSelected: state => state.fileSelected,
  getCommitMessage: state => state.commitMessage,
}
