import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { actions as gitActions } from 'sync-git'
import { store } from 'sync-store'


export class Repo extends React.Component {
  componentDidMount() {
    this.props.gitStatus()
    this.props.gitDiff()
    this.props.gitDiffSummary()
  }
  render() {
    return (
      <div>
        Repo
        <div>{ this.props.path } - { this.props.current }</div>
        { this.props.diffSummary ? _.map(this.props.diffSummary.files, file => (
          <div key={ file.file }>
            <div>name: { file.file }</div>
            <div>changes: { file.changes }</div>
            <div>deletions: { file.deletions }</div>
            <div>insertions: { file.insertions }</div>
          </div>
        )) : null }

        { this.props.diff }
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
