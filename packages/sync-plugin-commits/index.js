import React from 'react'
import { Icon } from 'sync-components'
import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { List } from './components/list'

export default connect(
  state => ({
    commits: store.getCommitsByPath(state, '/Users/case/Github/sync'),
  }),
)(List)

export const name = 'Commits'
export const icon = <Icon name="history" />

export { reducer, actions, selectors } from './reducer'
