import _ from 'lodash'
import { GIT_API } from 'redux-git-middleware'

export const OPEN_REQUEST = 'GIT/REPOS/OPEN_REQUEST'
export const OPEN = 'GIT/REPOS/OPEN'
export const OPEN_FAILURE = 'GIT/REPOS/OPEN_FAILURE'

export const STATUS_REQUEST = 'GIT/REPOS/STATUS_REQUEST'
export const STATUS = 'GIT/REPOS/STATUS'
export const STATUS_FAILURE = 'GIT/REPOS/STATUS_FAILURE'

export const DIFF_REQUEST = 'GIT/REPOS/DIFF_REQUEST'
export const DIFF = 'GIT/REPOS/DIFF'
export const DIFF_FAILURE = 'GIT/REPOS/DIFF_FAILURE'

export const DIFF_SUMMARY_REQUEST = 'GIT/REPOS/DIFF_SUMMARY_REQUEST'
export const DIFF_SUMMARY = 'GIT/REPOS/DIFF_SUMMARY'
export const DIFF_SUMMARY_FAILURE = 'GIT/REPOS/DIFF_SUMMARY_FAILURE'

const repo = (state, action) => {
  switch (action.type) {
    case STATUS:
      return { ...state, ...action.status, path: action.path }
    case DIFF:
      return { ...state, diff: action.diff }
    case DIFF_SUMMARY:
      return { ...state, diffSummary: action.diffSummary }
    default: return state
  }
}

export default function repos(state = {}, action) {
  switch (action.type) {
    case STATUS:
      return { ...state, [action.path]: repo(state[action.path], action) }
    case DIFF:
      return { ...state, [action.path]: repo(state[action.path], action) }
    case DIFF_SUMMARY:
      return { ...state, [action.path]: repo(state[action.path], action) }
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
  gitReposStatus: repoList => (dispatch) => {
    _.each(repoList, ({ path }) =>
      dispatch(actions.gitStatus(path)),
    )
  },
  gitStatus: path => ({
    [GIT_API]: {
      path,
      method: 'status',
      types: [STATUS_REQUEST, STATUS, STATUS_FAILURE],
    },
  }),
  gitDiff: () => ({
    [GIT_API]: {
      method: 'diff',
      types: [DIFF_REQUEST, DIFF, DIFF_FAILURE],
    },
  }),
  gitDiffSummary: () => ({
    [GIT_API]: {
      method: 'diffSummary',
      types: [DIFF_SUMMARY_REQUEST, DIFF_SUMMARY, DIFF_SUMMARY_FAILURE],
    },
  }),
}

export const selectors = {
  getRepoByPath: (state, path) => {
    return state[path]
  },
  getReposByPaths: (state, paths) =>
    _.reduce(paths, (all, path) => {
      state[path] && (all[path] = state[path]) // eslint-disable-line no-param-reassign
      return all
    }, {},
  ),
}
