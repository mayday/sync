import { GIT_API } from 'redux-git-middleware'

export const OPEN_REPO_REQUEST = 'GIT/OPEN_REPO_REQUEST'
export const OPEN_REPO = 'GIT/OPEN_REPO'
export const OPEN_REPO_FAILURE = 'GIT/OPEN_REPO_FAILURE'

export const actions = {
  openRepo: path => ({
    [GIT_API]: {
      path,
      method: 'status',
      types: [OPEN_REPO_REQUEST, OPEN_REPO, OPEN_REPO_FAILURE],
    },
  }),
}
