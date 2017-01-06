import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'
import { loop } from '../helper'

import { Commit } from './commit'

export const List = ({ commits }) => {
  const styles = reactCSS({
    'default': {
      list: {
        marginBottom: 15,
        flex: 1,
      },
      commit: {
        marginBottom: 1,
      },
    },
  })

  console.log(commits.length)

  return (
    <div style={ styles.list }>
      { _.map(commits, (commit, i) => (
        <div key={ i } style={ styles.commit }>
          <Commit
            { ...commit }
            { ...loop(i, commits.length) }
          />
        </div>
      )) }
    </div>
  )
}
