import React from 'react'
import reactCSS from 'reactcss'

import { Icon, Media } from '../'

export const RepoHeader = ({ name, currentBranch }) => {
  const styles = reactCSS({
    'default': {
      header: {
        color: '#666',
        cursor: 'default',
      },
      branch: {
        color: '#bbb',
        cursor: 'pointer',
      },
    },
  })

  return (
    <div style={ styles.header }>
      <Media
        center
        left={ name ? <Icon name="source-branch" /> : null }
        right={ <Icon name="refresh" /> }
      >
        { name ? (
          <div>
            { name } / <span style={ styles.branch }>{ currentBranch }</span>
          </div>
        ) : null }
      </Media>
    </div>
  )
}
