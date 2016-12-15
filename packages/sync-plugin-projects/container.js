import { connect } from 'react-redux'
import { store } from 'sync-store'

import { Projects } from './projects'

export default connect(
  state => ({
    groups: [
      {
        category: 'starred',
        items: [
          {
            name: 'sync',
            path: '/Users/case/Github/sync',
          },
        ],
      },
      {
        category: 'repos',
        items: [
          {
            name: 'lightning-desktop',
            path: '/Users/case/Github/lightning-desktop',
          }, {
            name: 'react-color',
            path: '/Users/case/Github/react-color',
          }, {
            name: 'reactcss',
            path: '/Users/case/Github/reactcss',
          },
        ],
      },
    ],
    onSelect: (path) => { console.log('CHANGE REPO ACTION', path) }, // eslint-disable-line
    activeRepo: store.getActiveRepo(state),
  }),
)(Projects)
