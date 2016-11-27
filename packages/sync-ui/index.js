export const CHANGE_ACTIVE_REPO = 'UI/CHANGE_ACTIVE_REPO'

const initialState = {
  activeRepo: '',
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_REPO:
      return { ...state, activeRepo: action.path }
    default: return state
  }
}

export const actions = {
  changeActiveRepo: path => ({ type: CHANGE_ACTIVE_REPO, path }),
}

export const selectors = {
  getActiveRepo: state => state.activeRepo,
}
