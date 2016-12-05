import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions as gitActions } from 'sync-store-git'
import { actions as uiActions } from 'sync-ui'


import { CommitList, LocalChanges, Scroll } from 'sync-components'

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
    const { commits, ahead, files, diff, setFileSelectedDiff, fileSelected,
      gitCommit, changeCommitMessage, commitMessage } = this.props
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
              <LocalChanges
                files={ files }
                diff={ diff }
                onSelect={ setFileSelectedDiff }
                fileSelected={ fileSelected }
                onCommitMessageChange={ changeCommitMessage }
                commitMessage={ commitMessage }
                onCommit={ gitCommit }
              />
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
    fileSelected: store.getFileSelected(state),
    commitMessage: store.getCommitMessage(state),
  }),
  { ...gitActions, ...uiActions },
)(Main)
