import { scopeStateToSelectors } from 'redux-selector'

import { selectors as git } from 'sync-git'
import { selectors as settings } from 'sync-settings'
import { selectors as ui } from 'sync-ui'

export default {
  ...scopeStateToSelectors({
    git,
    settings,
    ui,
  }),
  getCurrentRepo: state => git.getRepoByPath(state.git, ui.getActiveRepo(state.ui)),
  getCurrentCommits: state => git.getCommitsByRepo(state.git, ui.getActiveRepo(state.ui)),
  getReposStatuses: state => git.getReposByPaths(state.git, settings.getReposPaths(state.settings)),
}
