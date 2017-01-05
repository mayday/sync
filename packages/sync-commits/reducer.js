import _ from 'lodash'

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

export const reducer = (state = initialState, action) => {
  const handler = {
  }[action.type]
  return handler ? handler() : state
}

export const actions = {

}

const ahead = 3
export const selectors = {
  getCommitsByPath: (state, repo) => _(state).filter({ repo }).map((commit, i, commits) => ({
    message: commit.message,
    author: commit.author_email,
    date: commit.date,
    local: i >= commits.length - ahead,
  })).value(),
}
