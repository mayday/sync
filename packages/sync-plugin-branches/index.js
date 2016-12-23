import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from './reducer'

import { Bar } from './components/bar'

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
    onRefresh: actions.refresh,
    onAdd: actions.add,
  },
)(Bar)

export { reducer, actions, selectors } from './reducer'

export keymap from './keymap'
