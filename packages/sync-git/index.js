import { combineReducers } from 'redux'
import { scopeStateToSelectors } from 'redux-selector'

import commits, { actions as commitsActions, selectors as commitsSelectors } from './commits'
import repos, { actions as reposActions, selectors as reposSelectors } from './repos'

export default combineReducers({
  commits,
  repos,
})

export const actions = {
  ...commitsActions,
  ...reposActions,
}

export const selectors = scopeStateToSelectors({
  commits: commitsSelectors,
  repos: reposSelectors,
})
