import { scopeStateToSelectors } from 'redux-selector'

import { selectors as git } from 'sync-store-git'
import { selectors as settings } from 'sync-store-settings'
import { selectors as ui } from 'sync-store-ui'

import { selectors as syncPluginBranches } from 'sync-plugin-branches'

const plugin = scopeStateToSelectors({
  'sync-plugin-branches': syncPluginBranches,
})

export default scopeStateToSelectors({
  git,
  settings,
  ui,

  plugin,
}, {
  getCurrentRepo: state => git.getRepoByPath(state.git, ui.getActiveRepo(state.ui)),
  getCurrentCommits: state => git.getCommitsByRepo(state.git, ui.getActiveRepo(state.ui)),
  getReposStatuses: state => git.getReposByPaths(state.git, settings.getReposPaths(state.settings)),
})
