import React from 'react'
import reactCSS from 'reactcss'

export const Header = () => {
  const styles = reactCSS({
    'default': {
      header: {

      },
    },
  })

  return (
    <div style={ styles.header }>
      Header
    </div>
  )
}

export default Header
