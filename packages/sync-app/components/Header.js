import React from 'react'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store'
import { actions as gitActions } from 'sync-store-git'
import { actions as uiActions } from 'sync-store-ui'

import BranchesPlugin from 'sync-plugin-branches'

import TrafficLights from './TrafficLights'

export const Header = () => {
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
        marginTop: 11,
        alignSelf: 'flex-start',
      },
      right: {
        flex: 1,
        maxHeight: '100%',
        display: 'flex',
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

  // const nameSplit = path && path.split('/')
  // const name = nameSplit && nameSplit[nameSplit.length - 1]

  return (
    <div style={ styles.header }>
      <div style={ styles.left }>
        <TrafficLights />
      </div>
      <div style={ styles.right }>
        <BranchesPlugin />
      </div>
      <div style={ styles.divider } />
    </div>
  )
}

export default connect(
  state => ({
    ...store.getCurrentRepo(state),
    menuVisible: store.getBranchMenuVisibility(state),
  }),
  { ...gitActions, ...uiActions },
)(Header)
