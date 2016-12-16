import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions as uiActions } from 'sync-store-ui'
import { actions } from './reducer'

import { Projects } from './components/projects'

export default connect(
  state => ({
    groups: store.getProjectsByCategory(state),
    activeRepo: store.getActiveRepo(state),
  }), {
    onStar: actions.star,
    onRemove: actions.remove,
    onSelect: uiActions.setActiveRepo,
  },
)(Projects)

export { reducer, actions, selectors } from './reducer'

export keymap from './keymap'
