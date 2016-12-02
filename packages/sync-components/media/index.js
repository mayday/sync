import React from 'react'
import reactCSS from 'reactcss'

export const Media = ({ left, children, right, spacing = 72, center }) => {
  const styles = reactCSS({
    'default': {
      media: {
        display: 'flex',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      },
      left: {
        width: spacing - 15,
        flexShrink: 0,
      },
      center: {
        flex: 1,
      },
      right: {
        paddingLeft: 15,
      },
    },
    'center': {
      media: {
        alignItems: 'center',
      },
    },
  }, { center })

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

export const CompactMedia = props => <Media { ...props } spacing={ 40 } />
