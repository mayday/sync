import { combineReducers } from 'redux'
import { scopeStateToSelectors } from 'redux-selector'

import commits, * as commit from './commits'
import repos, * as repo from './repos'

export default combineReducers({
  commits,
  repos,
})

export const actions = {
  ...commit.actions,
  ...repo.actions,
}

export const selectors = scopeStateToSelectors({
  commits: commit.electors,
  repos: repo.selectors,
})

export const types = { ...commit, ...repo }
