import React from 'react'
import reactCSS from 'reactcss'

import { Icon, Media } from '../'

export const RepoHeader = ({ name, currentBranch }) => {
  const styles = reactCSS({
    'default': {
      header: {
        color: '#666',
      },
      branch: {
        color: '#bbb',
      },
    },
  })

  return (
    <div style={ styles.header }>
      <Media
        center
        left={ <Icon name="source-branch" /> }
        right={ <Icon name="refresh" /> }
      >
        { name } / <span style={ styles.branch }>{ currentBranch }</span>
      </Media>
    </div>
  )
}
