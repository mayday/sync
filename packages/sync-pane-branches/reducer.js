import _ from 'lodash'
import { createFilter } from 'react-search-input'

export const TOGGLE_LIST = 'PANE/BRANCHES/TOGGLE_LIST'
export const SEARCH = 'PANE/BRANCHES/SEARCH'
export const CLEAR = 'PANE/BRANCHES/CLEAR'

const initialState = {
  search: '',
  listVisibility: false,
  branches: [
    'master',
    'new-feature-branch-name',
    'some-branch',
    'some-branch-diff',
  ],
}

export const reducer = (state = initialState, action) => {
  const handler = {
    [TOGGLE_LIST]: () => ({ ...state, listVisibility: !state.listVisibility }),
    [SEARCH]: () => ({ ...state, search: action.search }),
    [CLEAR]: () => ({ ...state, search: '', listVisibility: false }),
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  toggleListVisibility: () => ({ type: TOGGLE_LIST }),
  setSearch: search => ({ type: SEARCH, search }),
  clear: () => ({ type: CLEAR }),
}

export const selectors = {
  getSearch: state => state.search,
  getBranches: (state) => {
    const search = selectors.getSearch(state)
    return _.map(state.branches, name => ({ name, search }))
  },
  getFilteredBranches: state =>
    _.filter(selectors.getBranches(state), createFilter(state.search, ['name'])),
  getListVisibility: state => state.listVisibility,
}
