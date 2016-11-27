import React from 'react'
import reactCSS from 'reactcss'

import { Card } from 'sync-components'

export const Main = () => {
  const styles = reactCSS({
    'default': {
      main: {
        marginTop: 15,
        marginRight: 15,
      },
    },
  })

  return (
    <div style={ styles.main }>
      <Card>Main</Card>
    </div>
  )
}

export default Main
