import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'

import { File } from './file'

export const LocalChangesFiles = ({ files, fileSelected, onSelect }) => {
  const styles = reactCSS({
    'default': {
      files: {
        paddingTop: 15,
        paddingBottom: 15,
      },
    },
  })

  return (
    <div style={ styles.files }>
      { _.map(files, (file, i) => (
        <File
          key={ i }
          path={ file.path }
          onSelect={ onSelect }
          selected={ file.path === fileSelected }
        />
      )) }
    </div>
  )
}
