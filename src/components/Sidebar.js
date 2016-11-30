import React from 'react'
import reactCSS from 'reactcss'

import { connect } from 'react-redux'
import { store } from 'sync-store'

import { SidebarGroup } from 'sync-components'

export const Sidebar = ({ starred, repos, statuses }) => {
  const styles = reactCSS({
    'default': {
      sidebar: {
        fontSize: 14,
      },
    },
  })

  return (
    <div style={ styles.sidebar }>
      { starred ? (
        <SidebarGroup
          label="Starred"
          icon="star"
          items={ starred }
          statuses={ statuses }
        />
      ) : null }

      <SidebarGroup
        label="Repos"
        icon="file-document-box"
        items={ repos }
        statuses={ statuses }
      />
    </div>
  )
}

export default connect(
  state => ({
    starred: store.getStarredRepos(state),
    repos: store.getUnstarredRepos(state),
    statuses: store.getReposStatuses(state),
  }),
)(Sidebar)
