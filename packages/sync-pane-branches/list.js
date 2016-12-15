import React from 'react'
import _ from 'lodash'

import { ListItem } from './list-item'

export const List = ({ name, current, branches }) => { // eslint-disable-line
  return (
    <div>
      { _.map(branches, branch => (
        <ListItem
          key={ branch.name }
          project={ name }
          name={ branch.name }
          search={ branch.search }
        />
      )) }
    </div>
  )
}
