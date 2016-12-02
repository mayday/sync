import React from 'react'
import reactCSS, { handleHover } from 'reactcss'
import { remote } from 'electron'

export const TrafficLights = ({ hover }) => {
  const styles = reactCSS({
    'default': {
      traffic: {
        display: 'flex',
        padding: 10,
        marginLeft: -10,
      },
      light: {
        width: 12,
        height: 12,
        marginRight: 7,
        borderRadius: 6,
        backgroundColor: '#666',
        cursor: 'pointer',

        transition: '100ms background-color ease-out',
      },
    },
    'hover': {
      light: {
        backgroundColor: '#bbb',
      },
    },
  }, { hover })

  const electron = remote.getCurrentWindow()
  const handleClose = () => electron.close()
  const handleMin = () => electron.minimize()
  const handleMax = () => (
    electron.isFullScreen() ? electron.setFullScreen(false) : electron.setFullScreen(true)
  )

  return (
    <div style={ styles.traffic }>
      <div style={ styles.light } onClick={ handleClose } />
      <div style={ styles.light } onClick={ handleMin } />
      <div style={ styles.light } onClick={ handleMax } />
    </div>
  )
}

export default handleHover(TrafficLights)
