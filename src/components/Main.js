import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store'

import { CommitList, LocalChanges, Scroll } from 'sync-components'

export const Main = (props) => {
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

  const commitList = _.map(props.commits, ({ message, author_email, date }, i) => ({
    message,
    author: author_email,
    date,
    local: i >= props.commits.length - props.ahead,
  }))

  return (
    <Scroll scrollToBottom>
      <div style={ styles.main }>
        <CommitList commits={ commitList } />
        { props.files && props.files.length ? (
          <div style={ styles.changes }>
            <LocalChanges files={ props.files } diff={ props.diff } />
          </div>
        ) : null }
      </div>
    </Scroll>
  )
}

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
    commits: _.reverse(store.getCurrentCommits(state) || []),
  }),
)(Main)
