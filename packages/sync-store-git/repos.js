import _ from 'lodash'
import { GIT_API } from 'redux-git-middleware'

export const OPEN_REQUEST = 'GIT/REPOS/OPEN_REQUEST'
export const OPEN = 'GIT/REPOS/OPEN'
export const OPEN_FAILURE = 'GIT/REPOS/OPEN_FAILURE'

export const STATUS_REQUEST = 'GIT/REPOS/STATUS_REQUEST'
export const STATUS = 'GIT/REPOS/STATUS'
export const STATUS_FAILURE = 'GIT/REPOS/STATUS_FAILURE'

export const ADD_REQUEST = 'GIT/REPOS/ADD_REQUEST'
export const ADD = 'GIT/REPOS/ADD'
export const ADD_FAILURE = 'GIT/REPOS/ADD_FAILURE'

export const DIFF_REQUEST = 'GIT/REPOS/DIFF_REQUEST'
export const DIFF = 'GIT/REPOS/DIFF'
export const DIFF_FAILURE = 'GIT/REPOS/DIFF_FAILURE'

export const DIFF_SUMMARY_REQUEST = 'GIT/REPOS/DIFF_SUMMARY_REQUEST'
export const DIFF_SUMMARY = 'GIT/REPOS/DIFF_SUMMARY'
export const DIFF_SUMMARY_FAILURE = 'GIT/REPOS/DIFF_SUMMARY_FAILURE'

export const PULL_REQUEST = 'GIT/REPOS/PULL_REQUEST'
export const PULL = 'GIT/REPOS/PULL'
export const PULL_FAILURE = 'GIT/REPOS/PULL_FAILURE'

export const PUSH_REQUEST = 'GIT/REPOS/PUSH_REQUEST'
export const PUSH = 'GIT/REPOS/PUSH'
export const PUSH_FAILURE = 'GIT/REPOS/PUSH_FAILURE'

export const SYNC_REQUEST = 'GIT/REPOS/SYNC_REQUEST'
export const SYNC = 'GIT/REPOS/SYNC'
export const SYNC_FAILURE = 'GIT/REPOS/SYNC_FAILURE'

export const BRANCHES = 'GIT/REPOS/BRANCHES'
export const CHECKOUT_BRANCH = 'GIT/REPOS/CHECKOUT_BRANCH'

const files = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return _.map(action.status.files, (file) => {
        return { ...file, tracked: true }
      })
    default: return state
  }
}

const repo = (state, action) => {
  switch (action.type) {
    case STATUS:
      return { ...state, ...action.status, files: files([], action), path: action.path }
    case DIFF:
      return { ...state, diff: action.diff, path: action.path }
    case DIFF_SUMMARY:
      return { ...state, diffSummary: action.diffSummary, path: action.path }
    case BRANCHES:
      return { ...state, branches: action.branchLocal.all }
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
    case BRANCHES:
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
  gitAdd: () => ({
    [GIT_API]: {
      method: 'add',
      args: ['.'],
      types: [ADD_REQUEST, ADD, ADD_FAILURE],
    },
  }),
  gitDiff: () => ({
    [GIT_API]: {
      method: 'diff',
      args: [['--cached']],
      types: [DIFF_REQUEST, DIFF, DIFF_FAILURE],
    },
  }),
  gitDiffSummary: () => ({
    [GIT_API]: {
      method: 'diffSummary',
      types: [DIFF_SUMMARY_REQUEST, DIFF_SUMMARY, DIFF_SUMMARY_FAILURE],
    },
  }),
  gitPull: () => ({
    [GIT_API]: {
      method: 'pull',
      types: [PULL_REQUEST, PULL, PULL_FAILURE],
    },
  }),
  gitPush: () => ({
    [GIT_API]: {
      method: 'push',
      types: [PUSH_REQUEST, PUSH, PUSH_FAILURE],
    },
  }),

  gitSync: () => (dispatch) => {
    dispatch({ type: SYNC_REQUEST })
    dispatch(actions.gitPull())
    .then(() => {
      dispatch(actions.gitPush())
      .then(() => {
        dispatch({ type: SYNC })
      })
    })
    .catch((error) => {
      dispatch({ type: SYNC_FAILURE, error })
    })
  },

  gitBranches: () => ({
    [GIT_API]: {
      method: 'branchLocal',
      types: [null, BRANCHES],
    },
  }),

  gitCheckoutBranch: branch => ({ type: CHECKOUT_BRANCH, branch }),
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
