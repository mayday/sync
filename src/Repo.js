import React from 'react'
import { connect } from 'react-redux'
import { actions as gitActions } from 'sync-git'
import { store } from 'sync-store'


export class Repo extends React.Component {
  componentDidMount() {
    this.props.gitStatus()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        Repo
      </div>
    )
  }
}

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
  }),
  { ...gitActions },
)(Repo)
