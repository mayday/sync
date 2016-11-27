import { combineReducers } from 'redux'
import { scopeStateToSelectors } from 'redux-selector'

import repos, { actions as reposActions, selectors as reposSelectors } from './repos'

export default combineReducers({
  repos,
})

export const actions = {
  ...reposActions,
}

export const selectors = scopeStateToSelectors({
  repos: reposSelectors,
})
