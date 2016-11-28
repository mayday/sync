import { combineReducers } from 'redux'

export const SAVE_REPO = 'SETTINGS/SAVE_REPO'

const repos = (state = [], action) => {
  switch (action.type) {
    case SAVE_REPO: {
      const name = action.path
      return { ...state, [name]: action.path }
    }
    default: return state
  }
}

export default combineReducers({
  repos,
})

export const actions = {
  saveRepo: path => ({ type: SAVE_REPO, path }),
}

export const selectors = {
  getRepos: state => state.repos,
}
