import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'
import { createFilter } from 'react-search-input'

import { Input, Media } from '../'

export const HeaderDropdown = ({ name, currentBranch, branches }) => {
  const styles = reactCSS({
    'default': {
      dropdown: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(39, 36, 42, 0.95)',
        paddingLeft: 150,
      },
      searchbar: {
        fontSize: 16,
        color: '#666',
        height: 54,
        display: 'flex',
        alignItems: 'center',
      },
      input: {
        color: '#bbb',
        marginLeft: 5,
      },
    },
  })

  console.log(branches)

  console.log(_.filter(branches, createFilter('som')))

  // const filteredBranches = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

  return (
    <div style={ styles.dropdown }>
      <Media spacing={ 54 } left>
        <div style={ styles.searchbar }>
          { name } / <Input placeholder={ currentBranch } style={ styles.input } />
        </div>
      </Media>

      { _.map(branches, branch => (
        <Media spacing={ 54 } left>
          <div style={ styles.searchbar }>
            { name } / { branch }
          </div>
        </Media>
      )) }
    </div>
  )
}
