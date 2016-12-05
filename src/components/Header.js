import React from 'react'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions } from 'sync-store-git'

import { RepoHeader } from 'sync-components'
import TrafficLights from './TrafficLights'

export const Header = ({ path, current, gitSync }) => {
  const styles = reactCSS({
    'default': {
      header: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        WebkitAppRegion: 'drag',
      },
      left: {
        width: 150,
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

  const nameSplit = path && path.split('/')
  const name = nameSplit && nameSplit[nameSplit.length - 1]

  return (
    <div style={ styles.header }>
      <div style={ styles.left }>
        <TrafficLights />
      </div>
      <div style={ styles.right }>
        <RepoHeader name={ name } currentBranch={ current } onSync={ gitSync } />
      </div>
      <div style={ styles.divider } />
    </div>
  )
}

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
  }),
  actions,
)(Header)
