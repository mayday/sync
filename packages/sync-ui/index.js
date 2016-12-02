export const CHANGE_ACTIVE_REPO = 'UI/CHANGE_ACTIVE_REPO'
export const CHANGE_FILE_SELECTED = 'UI/CHANGE_FILE_SELECTED'

const initialState = {
  activeRepo: '/Users/case/Github/sync', // TODO: REMOVE
  fileSelected: '',
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_REPO:
      return { ...state, activeRepo: action.path }
    case CHANGE_FILE_SELECTED:
      return { ...state, fileSelected: action.path }
    default: return state
  }
}

export const actions = {
  changeActiveRepo: path => ({ type: CHANGE_ACTIVE_REPO, path }),
  setFileSelectedDiff: path => ({ type: CHANGE_FILE_SELECTED, path }),
}

export const selectors = {
  getActiveRepo: state => state.activeRepo,
  getFileSelected: state => state.fileSelected,
}
