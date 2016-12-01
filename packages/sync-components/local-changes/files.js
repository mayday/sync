import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

export const LocalChangesFiles = ({ files }) => {
  const styles = reactCSS({
    'default': {

    },
  })

  return (
    <div>
      Files

      { _.map(files, (file, i) => (
        <div key={ i }>{ file.path }</div>
      )) }
    </div>
  )
}
