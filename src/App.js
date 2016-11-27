import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { actions as gitActions } from 'sync-git'
import { actions as settingsActions } from 'sync-settings'
import { actions as uiActions } from 'sync-ui'
import { store } from 'sync-store'

import Repo from './Repo'

export class App extends React.Component {
  componentDidMount() {
    this.props.openRepo('/Users/case/Github/sync').then((repo) => {
      this.props.saveRepo(repo.path)
      this.props.changeActiveRepo(repo.path)
    })
  }
  render() {
    return (
      <div>
        Sync
        { _.map(this.props.repos, (path, name) => (
          <div key={ path }>{ name }</div>
        )) }
        { this.props.activeRepo }

        { this.props.activeRepo ? (
          <Repo />
        ) : null }
      </div>
    )
  }
}

export default connect(
  state => ({
    repos: store.getRepos(state),
    activeRepo: store.getActiveRepo(state),
  }),
  { ...gitActions, ...settingsActions, ...uiActions },
)(App)
