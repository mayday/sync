import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

export const LocalChangesFiles = ({ files }) => {
  const styles = reactCSS({
    'default': {
      files: {
        padding: 15,
      },
      file: {
        fontSize: 14,
        color: '#D4E157',
        opacity: 0.6,
        marginBottom: 10,
      },
    },
  })

  return (
    <div style={ styles.files }>
      { _.map(files, (file, i) => (
        <div key={ i } style={ styles.file }>{ file.path }</div>
      )) }
    </div>
  )
}
