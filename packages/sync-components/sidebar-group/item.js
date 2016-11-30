import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

export const SidebarGroupItem = handleHover(({ name, localChanges, unstagedChanges,
  hover }) => {
  const styles = reactCSS({
    'default': {
      item: {
        color: '#bbb',
        paddingRight: 8,
        paddingLeft: 8,
        position: 'relative',
        transition: 'color 100ms ease-out, background-color 100ms ease-out',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0)',
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
        left: -2,
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
    'hover': {
      item: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
      },
    },
  }, { localChanges, unstagedChanges, hover })

  return (
    <div style={ styles.item }>
      <div style={ styles.dot }>•</div>
      <div style={ styles.label }>
        { name }
      </div>
    </div>
  )
})
