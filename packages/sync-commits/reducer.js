import _ from 'lodash'
import { types as GIT, actions as git } from 'sync-store-git'

const initialState = {
  'hash1': {
    hash: 'hash1',
    message: 'Init Repo',
    author_email: 'case@casesandberg.com',
    date: Date.now(),
    repo: '/Users/case/Github/sync',
  },
  'hash2': {
    hash: 'hash2',
    message: 'Add Exports',
    author_email: 'case@casesandberg.com',
    date: Date.now(),
    repo: '/Users/case/Github/sync',
  },
  'hash3': {
    hash: 'hash3',
    message: 'Make Plugins Package Accessible',
    author_email: 'case@casesandberg.com',
    date: Date.now(),
    repo: '/Users/case/Github/sync',
  },
  'hash4': {
    hash: 'hash4',
    message: 'Skin CommitList',
    author_email: 'case@casesandberg.com',
    date: Date.now(),
    repo: '/Users/case/Github/sync',
  },
  'hash5': {
    hash: 'hash5',
    message: 'Add Proper Callbacks to All Components',
    author_email: 'case@casesandberg.com',
    date: Date.now(),
    repo: '/Users/case/Github/sync',
  },
  'hash6': {
    hash: 'hash6',
    message: 'Really Long Commit Message That Should Span The Whole Width',
    author_email: 'case@casesandberg.com',
    date: Date.now(),
    repo: '/Users/case/Github/sync',
  },
}

export const reducer = (state = {}, action) => {
  const handler = {
    [GIT.GET_CURRENT]: () => {
      console.log(action)
      return {
        ..._.reduce(action.logs.all, (all, commit) => {
          // eslint-disable-next-line no-param-reassign
          all[commit.hash] = { ...commit, repo: action.path }
          return all
        }, state),
      }
    },
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  fetch: () => (dispatch) => {
    dispatch(git.gitCommits())
  },
}

const ahead = 3 // TODO: Remove
export const selectors = {
  getCommitsByPath: (state, repo) => _(state).filter({ repo }).map((commit, i, commits) => ({
    message: commit.message,
    author: commit.author_email,
    date: commit.date,
    local: i >= commits.length - ahead,
  })).value(),
}
