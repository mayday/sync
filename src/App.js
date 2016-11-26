import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { actions as gitActions } from 'sync-git'
import { actions as settingsActions } from 'sync-settings'
import { store } from 'sync-store'


export class App extends React.Component {
  componentDidMount() {
    this.props.openRepo('/Users/case/Github/sync').then((repo) => {
      this.props.saveRepo(repo.path)
    })
  }
  render() {
    return (
      <div>
        Sync
        { _.map(this.props.repos, (path, name) => (
          <div key={ path }>{ name }</div>
        )) }
      </div>
    )
  }
}

export default connect(
  state => ({
    repos: store.getRepos(state),
  }),
  { ...gitActions, ...settingsActions },
)(App)
