import React from 'react'
import reactCSS from 'reactcss'

import { Icon, Media } from '../'

export const RepoHeader = ({ name, currentBranch, onSync,
  toggleBranchMenuVisibility, menuVisible }) => {
  const styles = reactCSS({
    'default': {
      header: {
        color: '#666',
        cursor: 'default',
        height: 54,
        display: 'flex',
      },
      branch: {
        color: '#bbb',
        cursor: 'pointer',
      },
    },
  })

  const handleClick = () => toggleBranchMenuVisibility()
  const rightIcon = menuVisible ? (
    <Icon name="close" onClick={ handleClick } />
  ) : (
    <Icon name="refresh" onClick={ onSync } />
  )

  return (
    <div style={ styles.header }>
      <Media
        center
        spacing={ 54 }
        left={ name ? <Icon name="source-branch" onClick={ handleClick } /> : null }
        right={ rightIcon }
      >
        { name ? (
          <div>
            { name } /
            <span style={ styles.branch } onClick={ handleClick }>
              { currentBranch }
            </span>
          </div>
        ) : null }
      </Media>
    </div>
  )
}
