import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from '../sync-layout'

import App from './components/App'

export default connect(
  state => ({
    activeUI: store.getActiveUI(state),
  }), {
    changeActiveUI: actions.changeActiveUI,
  },
)(App)
