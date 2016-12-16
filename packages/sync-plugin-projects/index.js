import { connect } from 'react-redux'
import { store } from 'sync-store'

import { Projects } from './components/projects'

export default connect(
  state => ({
    groups: store.getProjectsByCategory(state),
    onSelect: (path) => { console.log('CHANGE REPO ACTION', path) }, // eslint-disable-line
    activeRepo: store.getActiveRepo(state),
  }),
)(Projects)

export { reducer, actions, selectors } from './reducer'

export keymap from './keymap'
