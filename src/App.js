import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'sync-git'

export class App extends React.Component {
  componentDidMount() {
    this.props.openRepo('/Users/case/Github/sync').then((repo) => {
      console.log(repo.path)
    })
  }
  render() {
    return (
      <div>Sync</div>
    )
  }
}

export default connect(
  () => ({}),
  actions,
)(App)
