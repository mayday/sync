import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from './reducer'

import { Search } from './components/search'

const Container = connect(
  state => ({
    visible: store.getVisibility(state),
  }), {
    toggleVisibility: actions.toggleVisibility,
  },
)

export default Container(Search)

export { reducer, actions, selectors } from './reducer'

export keymap from './keymap'

export const ui = [{
  context: 'body',
  component: Container(Search),
}]
