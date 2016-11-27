import React from 'react'
import reactCSS from 'reactcss'

import { RepoHeader } from 'sync-components'
import TrafficLights from './TrafficLights'

export const Header = () => {
  const styles = reactCSS({
    'default': {
      header: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      left: {
        width: 180,
        paddingLeft: 15,
        boxSizing: 'border-box',
      },
      right: {
        flex: 1,
      },
      divider: {
        position: 'absolute',
        bottom: 0,
        right: 15,
        left: 15,
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        boxShadow: '0 2px 4px rgba(39, 36, 42, 0.4)',
      },
    },
  })

  return (
    <div style={ styles.header }>
      <div style={ styles.left }>
        <TrafficLights />
      </div>
      <div style={ styles.right }>
        <RepoHeader name="lightning-desktop" currentBranch="master" />
      </div>
      <div style={ styles.divider } />
    </div>
  )
}

export default Header
