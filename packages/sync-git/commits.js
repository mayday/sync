import _ from 'lodash'
import { combineReducers } from 'redux'
import { GIT_API } from 'redux-git-middleware'

export const GET_CURRENT_REQUEST = 'GIT/COMMITS/GET_CURRENT_REQUEST'
export const GET_CURRENT = 'GIT/COMMITS/GET_CURRENT'
export const GET_CURRENT_FAILURE = 'GIT/COMMITS/GET_CURRENT_FAILURE'

export const COMMIT_REQUEST = 'GIT/COMMITS/COMMIT_REQUEST'
export const COMMIT = 'GIT/COMMITS/COMMIT'
export const COMMIT_FAILURE = 'GIT/COMMITS/COMMIT_FAILURE'

const byHash = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT:
      return {
        ...state,
        ..._.reduce(action.logs.all, (all, commit) => {
          all[commit.hash] = commit // eslint-disable-line no-param-reassign
          return all
        }, {}),
      }
    default: return state
  }
}

const idsByRepo = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT:
      return {
        ...state,
        [action.path]: _.map(action.logs.all, 'hash'),
      }
    default: return state
  }
}

export default combineReducers({
  byHash,
  idsByRepo,
})

export const actions = {
  gitCommits: () => ({
    [GIT_API]: {
      method: 'log',
      types: [GET_CURRENT_REQUEST, GET_CURRENT, GET_CURRENT_FAILURE],
      model: 'logs',
    },
  }),
  gitCommit: (message, files) => ({
    [GIT_API]: {
      method: 'commit',
      args: [message, files],
      types: [COMMIT_REQUEST, COMMIT, COMMIT_FAILURE],
      model: 'commit',
    },
  }),
}

export const selectors = {
  getCommitsByRepo: (state, path) => {
    return state.idsByRepo[path] && _.map(state.idsByRepo[path], hash => state.byHash[hash])
  },
}
