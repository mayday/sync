import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'
import { createFilter } from 'react-search-input'

import { Input, Media } from '../'
import { HeaderDropdownItem } from './item'

export const HeaderDropdown = ({ name, currentBranch, branches,
  setBranchSearch, branchSearch, gitCheckoutBranch }) => {
  const styles = reactCSS({
    'default': {
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

  const filteredBranches = _.filter(branches, createFilter(branchSearch))

  return (
    <div style={ styles.dropdown }>
      <Media spacing={ 54 } left>
        <div style={ styles.searchbar }>
          { name } /
          <Input
            placeholder={ currentBranch }
            onChange={ setBranchSearch }
            style={ styles.input }
          />
        </div>
      </Media>

      { _.map(filteredBranches, (branch, i) => (
        <HeaderDropdownItem
          prefix={ name }
          key={ i }
          name={ branch }
          search={ branchSearch }
          onSelect={ gitCheckoutBranch }
        />
      )) }
    </div>
  )
}
