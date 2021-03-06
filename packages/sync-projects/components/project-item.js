import React from 'react'
import reactCSS, { handleHover } from 'reactcss'
import { remote } from 'electron'

export const ProjectItem = handleHover(({ path, name, active, hover, onSelect,
  localChanges, unstagedChanges, onStar, onRemove }) => {
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
      active: {
        position: 'absolute',
        left: -7,
        transition: 'opacity 100ms ease-out, transform 100ms ease-out',
        height: 24,
        width: 3,
        borderRadius: '0 2px 2px 0',
        background: 'rgba(212, 225, 87, 1)',
        transform: 'translateX(-3px)',
      },
    },
    'localChanges': {
      item: {
        color: 'rgba(212, 225, 87, 1)',
        fontWeight: 500,
      },
    },
    'unstagedChanges': {
      item: {
        color: 'rgba(212, 225, 87, 1)',
        fontWeight: 500,
      },
    },
    'hover': {
      item: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
      },
    },
    'active': {
      active: {
        transform: 'translateX(0)',
      },
    },
  }, { localChanges, unstagedChanges, hover, active })

  const handleClick = () => onSelect(path)
  const handleStar = () => onStar(path)
  const handleRemove = () => onRemove(path)

  // move this into componentDidMount
  const { Menu, MenuItem } = remote
  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Star Repo',
    click: handleStar,
  }))
  menu.append(new MenuItem({ type: 'separator' }))
  menu.append(new MenuItem({
    label: 'Remove',
    click: handleRemove,
  }))

  const handleMenu = (e) => {
    e.preventDefault()
    menu.popup(e.clientX, e.clientY)
  }

  return (
    <div style={ styles.item } onClick={ handleClick } onContextMenu={ handleMenu }>
      <div style={ styles.active } />
      <div style={ styles.label }>
        { name }
      </div>
    </div>
  )
})
