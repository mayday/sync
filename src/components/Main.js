import React from 'react'
import reactCSS from 'reactcss'
import moment from 'moment'

import { CommitList } from 'sync-components'

export const Main = () => {
  const styles = reactCSS({
    'default': {
      main: {
        marginTop: 15,
        marginRight: 15,
        marginLeft: 5,
      },
    },
  })

  const commitList = [{
    message: 'Wallets Fetch Failure',
    author: 'case@casesandberg.com',
    date: moment().subtract(11, 'days'),
    filesChanged: 2,
  }, {
    message: 'Fix `WalletBalance` Returned Data',
    author: 'case@casesandberg.com',
    date: moment().subtract(11, 'days'),
    filesChanged: 1,
  }, {
    message: 'Add Title',
    author: 'case@casesandberg.com',
    date: moment().subtract(10, 'days'),
    filesChanged: 3,
  }, {
    message: 'Wallets Fetch Failure',
    author: 'case@casesandberg.com',
    date: moment().subtract(7, 'days'),
    filesChanged: 2,
  }, {
    message: 'Fix `WalletBalance` Returned Data',
    author: 'case@casesandberg.com',
    date: moment().subtract(2, 'days'),
    filesChanged: 1,
  }, {
    message: 'Add Title',
    author: 'case@casesandberg.com',
    date: moment().subtract(4, 'hours'),
    filesChanged: 3,
  }]

  return (
    <div style={ styles.main }>
      <CommitList commits={ commitList } />
    </div>
  )
}

export default Main
