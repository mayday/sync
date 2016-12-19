import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Icon } from 'sync-components'

export const ActionIcon = handleHover(({ name, active, hover }) => {
  const styles = reactCSS({
    'default': {
      icon: {
        color: '#555',
        cursor: 'pointer',
        padding: 5,
        transition: 'color 100ms ease-out',
        marginRight: 5,
      },
    },
    'hover': {
      icon: {
        color: '#777',
      },
    },
    'active': {
      icon: {
        color: 'rgba(212, 225, 87, 1)',
      },
    },
  }, { hover, active })

  return (
    <div style={ styles.icon }>
      <Icon name={ name } />
    </div>
  )
})
