import _ from 'lodash'
import { types as GIT, actions as git } from 'sync-store-git'

export const reducer = (state = {}, action) => {
  const handler = {
    [GIT.GET_CURRENT]: () => ({
      ..._.reduce(action.logs.all, (all, commit) => {
        // eslint-disable-next-line no-param-reassign
        all[commit.hash] = { ...commit, repo: action.path }
        return all
      }, state),
    }),
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
  getCommitsByPath: (state, repo) =>
    _(state).filter({ repo })
    .map((commit, i, commits) => ({
      message: commit.message,
      author: commit.author_email,
      date: commit.date,
      local: i >= commits.length - ahead,
    }))
    .value(),
}
