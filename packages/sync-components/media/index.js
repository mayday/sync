import React from 'react'
import reactCSS from 'reactcss'

export const Media = ({ left, children, right, size = 72 }) => {
  const styles = reactCSS({
    'default': {
      media: {
        display: 'flex',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      },
      left: {
        width: size - 15,
      },
      center: {
        flex: 1,
      },
      right: {
        paddingLeft: 15,
      },
    },
  })

  return (
    <div style={ styles.media }>
      { left ? <div style={ styles.left }>{ left }</div> : null }

      <div style={ styles.center }>
        { children }
      </div>

      { right ? <div style={ styles.right }>{ right }</div> : null }
    </div>
  )
}

export default Media

export const CompactMedia = props => <Media { ...props } size={ 40 } />
