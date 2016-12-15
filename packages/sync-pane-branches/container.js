import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions } from './reducer'

import { Bar } from './bar'

export default connect(
  state => ({
    name: 'sync',
    current: store.getCurrentBranch(state),
    branches: store.getFilteredBranches(state),
    listVisible: store.getListVisibility(state),
    search: store.getSearch(state),
    active: store.getActive(state),
  }),
  {
    onToggleList: actions.toggleListVisibility,
    onSearch: actions.setSearch,
    onClear: actions.clear,
    onSelect: actions.select,
    onSetActive: actions.setActive,
  },
)(Bar)
