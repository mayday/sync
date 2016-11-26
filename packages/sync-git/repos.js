import git from 'simple-git/promise'

export const OPEN_REPO_REQUEST = 'GIT/OPEN_REPO_REQUEST'
export const OPEN_REPO = 'GIT/OPEN_REPO'
export const OPEN_REPO_FAILURE = 'GIT/OPEN_REPO_FAILURE'

export const actions = {
  openRepo: (path) => {
    return (dispatch) => {
      dispatch({ type: OPEN_REPO_REQUEST, path })

      git(path)
        .status()
        .then((status) => {
          dispatch({ type: OPEN_REPO, status })
        })
        .catch((error) => {
          dispatch({ type: OPEN_REPO_FAILURE, error })
        })
    }
  },
}
