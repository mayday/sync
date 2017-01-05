import _ from 'lodash'
import { remote } from 'electron'

const ADD_FOLDER = 'PLUGIN/PROJECTS/ADD_FOLDER'
const STAR = 'PLUGIN/PROJECTS/STAR'
const REMOVE = 'PLUGIN/PROJECTS/REMOVE'

const initialState = {
  '/Users/case/Github/sync': {
    name: 'sync',
    path: '/Users/case/Github/sync',
    category: 'starred',
  },
  '/Users/case/Github/lightning-desktop': {
    name: 'lightning-desktop',
    path: '/Users/case/Github/lightning-desktop',
  },
  '/Users/case/Github/react-color': {
    name: 'react-color',
    path: '/Users/case/Github/react-color',
  },
  '/Users/case/Github/reactcss': {
    name: 'reactcss',
    path: '/Users/case/Github/reactcss',
  },
}

export const reducer = (state = initialState, action) => {
  const handler = {
    [ADD_FOLDER]: () => ({ ...state, [action.project.path]: action.project }),
    [STAR]: () => ({ ...state, [action.path]: { ...state[action.path], category: 'starred' } }),
    [REMOVE]: () => _.omit(state, action.path),
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  addFolder: () => (dispatch) => {
    remote.dialog.showOpenDialog({ properties: ['openDirectory'] }, ([path] = []) => {
      if (path) {
        const split = path.split('/')
        const name = split[split.length - 1]

        dispatch({ type: ADD_FOLDER, project: { name, path } })
      }
    })
  },
  star: path => ({ type: STAR, path }),
  remove: path => ({ type: REMOVE, path }),
}

export const selectors = {
  getProjectsByCategory: (state) => {
    const categories = _(state).map(p => p.category || 'repos').uniq().value()
    return _.map(categories, category => ({
      category,
      items: _(state).filter(p => (p.category || 'repos') === category).sortBy('name').value(),
    }))
  },
}
