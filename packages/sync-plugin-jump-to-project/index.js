import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions } from './reducer'

import { Search } from './components/search'

export default connect(
  state => ({
    visible: store.getVisibility(state),
  }), {
    toggleVisibility: actions.toggleVisibility,
  },
)(Search)

export { reducer, actions, selectors } from './reducer'

export keymap from './keymap'
