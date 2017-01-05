import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { ProjectGroup } from './project-group'

export const Projects = ({ groups, onSelect, onStar, onRemove, activeRepo }) => {
  const styles = reactCSS({
    'default': {
      sidebar: {
        fontSize: 14,
      },
    },
  })

  const display = {
    starred: {
      label: 'Starred',
      icon: 'star',
    },
    repos: {
      label: 'Repos',
      icon: 'file-document-box',
    },
  }

  return (
    <div style={ styles.sidebar }>
      { _.map(groups, ({ category, items }) => (items ? (
        <ProjectGroup
          key={ category }
          { ...display[category] }
          items={ items }
          onSelect={ onSelect }
          onStar={ onStar }
          onRemove={ onRemove }
          activeRepo={ activeRepo }
        />
      ) : null)) }
    </div>
  )
}
