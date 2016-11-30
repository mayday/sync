import React from 'react'
import reactCSS from 'reactcss'

export const SidebarGroupItem = ({ name, localChanges, unstagedChanges }) => {
  const styles = reactCSS({
    'default': {
      item: {
        color: '#bbb',
        paddingRight: 5,
        position: 'relative',
        transition: 'color 100ms ease-out',
      },
      label: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
      },
      dot: {
        opacity: 0,
        fontSize: 20,
        lineHeight: '20px',
        position: 'absolute',
        left: -10,
        transition: 'opacity 100ms ease-out',
      },
    },
    'localChanges': {
      item: {
        color: 'rgba(212, 225, 87, 1)',
      },
    },
    'unstagedChanges': {
      dot: {
        opacity: 1,
      },
    },
  }, { localChanges, unstagedChanges })

  return (
    <div style={ styles.item }>
      <div style={ styles.dot }>•</div>
      <div style={ styles.label }>
        { name }
      </div>
    </div>
  )
}
