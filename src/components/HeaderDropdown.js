import React from 'react'
import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions as gitActions } from 'sync-store-git'
import { actions as uiActions } from 'sync-store-ui'

import { HeaderDropdown } from 'sync-components'

class HeaderDropdownContainer extends React.Component {
  componentDidMount() { this.props.gitBranches() }
  render() {
    return <HeaderDropdown { ...this.props } />
  }
}

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
  }),
  { ...gitActions, ...uiActions },
)(HeaderDropdownContainer)
