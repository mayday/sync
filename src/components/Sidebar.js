import React from 'react'
import reactCSS from 'reactcss'

import { SidebarGroup } from 'sync-components'

export const Sidebar = () => {
  const styles = reactCSS({
    'default': {
      sidebar: {
        fontSize: 14,
      },
    },
  })

  const starredItems = [{
    name: 'lightning-core',
    value: '/User/case/Github/lightning-core',
  }, {
    name: 'lightning-core-ui',
    value: '/User/case/Github/lightning-core-ui',
  }, {
    name: 'lightning-desktop',
    value: '/User/case/Github/lightning-desktop',
  }]

  const repos = [{
    name: 'editor-settings',
    value: '/User/case/Github/editor-settings',
  }, {
    name: 'react-color',
    value: '/User/case/Github/react-color',
  }, {
    name: 'reactcss',
    value: '/User/case/Github/reactcss',
  }, {
    name: 'redux-nylas-middleware',
    value: '/User/case/Github/redux-nylas-middleware',
  }]

  return (
    <div style={ styles.sidebar }>
      <SidebarGroup
        label="Starred"
        icon="star"
        items={ starredItems }
      />

      <SidebarGroup
        label="Repos"
        icon="file-document-box"
        items={ repos }
      />
    </div>
  )
}

export default Sidebar
