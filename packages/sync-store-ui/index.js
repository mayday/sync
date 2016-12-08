export const CHANGE_ACTIVE_REPO = 'UI/CHANGE_ACTIVE_REPO'
export const CHANGE_FILE_SELECTED = 'UI/CHANGE_FILE_SELECTED'
export const CHANGE_COMMIT_MESSAGE = 'UI/CHANGE_COMMIT_MESSAGE'
export const TOGGLE_BRANCH_MENU_VISIBILITY = 'UI/TOGGLE_BRANCH_MENU_VISIBILITY'
export const BRANCH_SEARCH_CHANGE = 'UI/BRANCH_SEARCH_CHANGE'

const initialState = {
  activeRepo: '/Users/case/Github/sync', // TODO: REMOVE
  fileSelected: '',
  commitMessage: '',
  branchMenuVisibility: false,
  branchSearch: '',
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_REPO:
      return { ...state, activeRepo: action.path }
    case CHANGE_FILE_SELECTED:
      return { ...state, fileSelected: action.path }
    case CHANGE_COMMIT_MESSAGE:
      return { ...state, commitMessage: action.message }
    case BRANCH_SEARCH_CHANGE:
      return { ...state, branchSearch: action.value }
    case TOGGLE_BRANCH_MENU_VISIBILITY:
      return { ...state, branchMenuVisibility: !state.branchMenuVisibility }
    default: return state
  }
}

export const actions = {
  changeActiveRepo: path => ({ type: CHANGE_ACTIVE_REPO, path }),
  setFileSelectedDiff: path => ({ type: CHANGE_FILE_SELECTED, path }),
  changeCommitMessage: message => ({ type: CHANGE_COMMIT_MESSAGE, message }),
  toggleBranchMenuVisibility: () => ({ type: TOGGLE_BRANCH_MENU_VISIBILITY }),
  branchSearchChange: value => ({ type: BRANCH_SEARCH_CHANGE, value }),
}

export const selectors = {
  getActiveRepo: state => state.activeRepo,
  getFileSelected: state => state.fileSelected,
  getCommitMessage: state => state.commitMessage,
  getBranchMenuVisibility: state => state.branchMenuVisibility,
  getBranchSearch: state => state.branchSearch,
}
