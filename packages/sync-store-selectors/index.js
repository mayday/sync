import { scopeStateToSelectors } from 'redux-selector'
import { getSelectors } from 'sync-plugins'

import { selectors as git } from 'sync-store-git'
import { selectors as ui } from 'sync-store-ui'

const plugins = scopeStateToSelectors(getSelectors())

export const store = scopeStateToSelectors({
  git,
  ui,

  plugins,
}, {
  getCurrentRepo: state => git.getRepoByPath(state.git, ui.getActiveRepo(state.ui)),
  getCurrentCommits: state => git.getCommitsByRepo(state.git, ui.getActiveRepo(state.ui)),
})
