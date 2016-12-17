import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store-selectors'
import { actions } from 'sync-store-git'

import { CommitList, Scroll } from 'sync-components'
import LocalChanges from './LocalChanges'

export class Main extends React.Component {
  componentDidUpdate(lastProps) {
    if (lastProps.path !== this.props.path) {
      this.props.gitAdd().then(() => {
        this.props.gitDiff()
        this.props.gitDiffSummary()
      })
      this.props.gitCommits()
      this.props.gitStatus()
    }
  }

  render() {
    const { commits, ahead, files } = this.props
    const styles = reactCSS({
      'default': {
        main: {
          marginTop: 15,
          marginRight: 15,
          marginLeft: 5,
        },
        changes: {
          marginBottom: 15,
          maxHeight: '78vh',
          display: 'flex',
        },
      },
    })

    const commitList = _.map(commits, ({ message, author_email, date }, i) => ({
      message,
      author: author_email,
      date,
      local: i >= commits.length - ahead,
    }))

    return (
      <Scroll scrollToBottom>
        <div style={ styles.main }>
          <CommitList commits={ commitList } />
          { files && files.length ? (
            <div style={ styles.changes }>
              <LocalChanges />
            </div>
          ) : null }
        </div>
      </Scroll>
    )
  }
}

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
    commits: _.reverse(store.getCurrentCommits(state) || []),
  }),
  actions,
)(Main)
