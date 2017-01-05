import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Icon, Media } from 'sync-components'

export const ListItem = handleHover(({ project, name, search, active, hover,
  onSelect, right }) => {
  const styles = reactCSS({
    'default': {
      item: {
        fontSize: 16,
        color: '#666',
        height: 54,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'color 100ms ease-out',
      },
      highlight: {
        color: '#bbb',
      },
    },
    'hover': {
      item: {
        color: '#bbb',
      },
    },
    'active': {
      item: {
        background: 'rgba(212, 225, 87, 0.05)',
        color: 'rgba(212, 225, 87, 0.5)',
        boxShadow: 'inset 0 0 0 1px rgba(212, 225, 87, 1)',
        borderRadius: 2,
      },
      highlight: {
        color: 'rgba(212, 225, 87, 1)',
      },
    },
    'hovered-active': {
      item: {
        color: 'rgba(212, 225, 87, 1)',
      },
    },
  }, { hover, active, 'hovered-active': hover && active })

  const handleClick = () => onSelect(name)

  const index = name.indexOf(search)
  const before = name.slice(0, index)
  const match = name.slice(index, index + search.length)
  const after = name.slice(index + search.length, name.length)
  const icon = active || hover ? <Icon name="swap-horizontal" /> : true
  return (
    <div style={ styles.item } onClick={ handleClick }>
      <Media center spacing={ 54 } left={ icon } right={ right }>
        { project } / { before }
        <span style={ styles.highlight }>{ match }</span>
        { after }
      </Media>
    </div>
  )
})
