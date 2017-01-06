/* eslint-disable react/jsx-no-bind */
import React from 'react'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { actions as gitActions } from 'sync-store-git'
import { Icon, Tooltip } from 'sync-components'

// import { getComponents } from 'sync-plugins'

import { headerIcon as commitsIcon, name as commitsName } from '../../sync-commits'
import { headerIcon as localChangesIcon, name as localChangesName } from '../../sync-local-changes'

import TrafficLights from './TrafficLights'

// const components = getComponents()
const BranchesPlugin = require('../../sync-branches').default

export const Header = ({ active, onActionBarChange }) => {
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
      actions: {
        color: '#666',
        display: 'flex',
        height: 54,
        alignItems: 'center',
        marginRight: 15,
      },
      spacer: {
        width: 20,
      },
      active: {
        color: '#bbb',
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
        <div style={ styles.actions }>

          <div style={ active === 'sync-local-changes' ? styles.active : {} }>
            <Tooltip label={ localChangesName } hoverColor="#bbb">
              <Icon
                path={ localChangesIcon }
                onClick={ onActionBarChange.bind(null, 'sync-local-changes') }
              />
            </Tooltip>
          </div>

          <div style={ styles.spacer } />

          <div style={ active === 'sync-commits' ? styles.active : {} }>
            <Tooltip label={ commitsName } hoverColor="#bbb">
              <Icon
                path={ commitsIcon }
                onClick={ onActionBarChange.bind(null, 'sync-commits') }
              />
            </Tooltip>
          </div>

          <div style={ styles.spacer } />

          <Tooltip label="Sync" hoverColor="#bbb">
            <Icon name="sync" />
          </Tooltip>

        </div>
      </div>
      <div style={ styles.divider } />
    </div>
  )
}

export default connect(
  () => ({}),
  gitActions,
)(Header)
