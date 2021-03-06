import React from 'react'
import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { List } from './components/list'
import { actions } from './reducer'

export const name = 'Commits'
export const headerIcon = 'M11,7V12.11L15.71,14.9L16.5,13.62L12.5,11.25V7M12.5,2C8.97,2 5.91,3.92 4.27,6.77L2,4.5V11H8.5L5.75,8.25C6.96,5.73 9.5,4 12.5,4A7.5,7.5 0 0,1 20,11.5A7.5,7.5 0 0,1 12.5,19C9.23,19 6.47,16.91 5.44,14H3.34C4.44,18.03 8.11,21 12.5,21C17.74,21 22,16.75 22,11.5A9.5,9.5 0 0,0 12.5,2Z'

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCommits(this.props.activeRepoPath)
  }
  render() {
    return <List { ...this.props } />
  }
}

export default connect(
  (state) => {
    const activeRepoPath = store.getActiveRepoPath(state)
    return {
      activeRepoPath,
      commits: store.getCommitsByPath(state, activeRepoPath),
    }
  }, {
    fetchCommits: actions.fetch,
  },
)(ListContainer)

export { reducer, actions, selectors } from './reducer'
