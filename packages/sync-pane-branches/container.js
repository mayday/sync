import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions } from './reducer'

import { Bar } from './bar'

export default connect(
  state => ({
    name: 'sync',
    current: 'master',
    branches: store.getFilteredBranches(state),
    listVisible: store.getListVisibility(state),
    search: store.getSearch(state),
  }),
  {
    onToggleList: actions.toggleListVisibility,
    onSearch: actions.setSearch,
  },
)(Bar)
