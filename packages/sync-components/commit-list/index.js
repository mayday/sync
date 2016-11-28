import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { Commit } from './commit'

export const CommitList = ({ commits }) => {
  const styles = reactCSS({
    'default': {
      list: {
        marginBottom: 64,
      },
      commit: {
        marginBottom: 1,
      },
    },
  })

  return (
    <div style={ styles.list }>
      { _.map(commits, commit => (
        <div style={ styles.commit }>
          <Commit { ...commit } />
        </div>
      )) }
    </div>
  )
}
