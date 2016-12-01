import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store'

import { CommitList, Scroll } from 'sync-components'

export const Main = (props) => {
  const styles = reactCSS({
    'default': {
      main: {
        marginTop: 15,
        marginRight: 15,
        marginLeft: 5,
      },
    },
  })


  const commitList = _.map(props.commits, ({ message, author_email, date }) => ({
    message,
    author: author_email,
    date,
    filesChanged: Math.round(Math.random() * 8),
  }))

  return (
    <Scroll scrollToBottom>
      <div style={ styles.main }>
        <CommitList commits={ commitList } />
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
