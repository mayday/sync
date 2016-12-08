import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'
import { createFilter } from 'react-search-input'

import { Input, Media } from '../'

export const HeaderDropdown = ({ name, currentBranch, branches,
  branchSearchChange, branchSearch }) => {
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
      highlight: {
        color: '#bbb',
      },
    },
  })

  const filteredBranches = _.filter(branches, createFilter(branchSearch))

  return (
    <div style={ styles.dropdown }>
      <Media spacing={ 54 } left>
        <div style={ styles.searchbar }>
          { name } /
          <Input
            placeholder={ currentBranch }
            onChange={ branchSearchChange }
            style={ styles.input }
          />
        </div>
      </Media>

      { _.map(filteredBranches, (branch, i) => {
        const index = branch.indexOf(branchSearch)
        const before = branch.slice(0, index)
        const match = branch.slice(index, index + branchSearch.length)
        const after = branch.slice(index + branchSearch.length, branch.length)
        return (
          <Media key={ i } spacing={ 54 } left>
            <div style={ styles.searchbar }>
              { name } / { before } <span style={ styles.highlight }>{ match }</span> { after }
            </div>
          </Media>
        )
      }) }
    </div>
  )
}
