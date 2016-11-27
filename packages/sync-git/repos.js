import { GIT_API } from 'redux-git-middleware'

export const OPEN_REQUEST = 'GIT/REPOS/OPEN_REQUEST'
export const OPEN = 'GIT/REPOS/OPEN'
export const OPEN_FAILURE = 'GIT/REPOS/OPEN_FAILURE'

export const STATUS_REQUEST = 'GIT/REPOS/STATUS_REQUEST'
export const STATUS = 'GIT/REPOS/STATUS'
export const STATUS_FAILURE = 'GIT/REPOS/STATUS_FAILURE'

export default function repos(state = {}, action) {
  switch (action.type) {
    case STATUS:
      return { ...state, [action.status.path]: action.status }
    default: return state
  }
}

export const actions = {
  openRepo: path => ({
    [GIT_API]: {
      path,
      method: 'status',
      types: [OPEN_REQUEST, OPEN, OPEN_FAILURE],
    },
  }),
  gitStatus: () => ({
    [GIT_API]: {
      method: 'status',
      types: [STATUS_REQUEST, STATUS, STATUS_FAILURE],
    },
  }),
}

export const selectors = {
  getRepoByPath: (state, path) => {
    return state[path]
  },
}
