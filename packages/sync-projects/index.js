import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from './reducer'

import { Projects } from './components/projects'

export default connect(
  state => ({
    groups: store.getProjectsByCategory(state),
    activeRepo: store.getActiveRepoPath(state),
  }), {
    onStar: actions.star,
    onRemove: actions.remove,
    // onSelect: uiActions.setActiveRepo,
  },
)(Projects)

export { reducer, actions, selectors } from './reducer'

export keymap from './keymap'
