import _ from 'lodash'
import { createFilter } from 'react-search-input'
import { actions as gitActions, types as GIT } from 'sync-store-git'

export const TOGGLE_LIST = 'PLUGIN/BRANCHES/TOGGLE_LIST'
export const SEARCH = 'PLUGIN/BRANCHES/SEARCH'
export const CLEAR = 'PLUGIN/BRANCHES/CLEAR'
export const SELECT = 'PLUGIN/BRANCHES/SELECT'
export const SET_ACTIVE = 'PLUGIN/BRANCHES/SET_ACTIVE'

const initialState = {
  search: '',
  listVisibility: false,
  current: 'master',
  active: 'master',
  branches: [],
}

const clear = {
  search: '',
  listVisibility: false,
  active: 'master',
}

export const reducer = (state = initialState, action) => {
  const handler = {
    [TOGGLE_LIST]: () => ({ ...state, ...clear, listVisibility: !state.listVisibility }),
    [SEARCH]: () => ({ ...state, search: action.search }),
    [CLEAR]: () => ({ ...state, ...clear }),
    [SELECT]: () => ({ ...state, current: action.branch, ...clear }),
    [SET_ACTIVE]: () => ({ ...state, active: action.branch }),
    [GIT.BRANCHES]: () => ({ ...state, branches: action.branchLocal.all }),
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  toggleListVisibility: () => ({ type: TOGGLE_LIST }),
  setSearch: search => ({ type: SEARCH, search }),
  clear: () => ({ type: CLEAR }),
  select: branch => ({ type: SELECT, branch }),
  setActive: branch => ({ type: SET_ACTIVE, branch }),
  refresh: () => (dispatch) => {
    dispatch(gitActions.gitBranches())
  },
}

export const selectors = {
  getCurrentBranch: state => state.current,
  getSearch: state => state.search,
  getBranches: (state) => {
    const search = selectors.getSearch(state)
    return [
      ..._.map(state.branches, name => ({ name, search })),
      { name: search, right: 'Add Branch', search },
    ]
  },
  getFilteredBranches: state =>
    _.filter(selectors.getBranches(state), createFilter(state.search, ['name'])),
  getListVisibility: state => state.listVisibility,
  getActive: state => state.active,
}
