// import Git from 'nodegit'

export const OPEN_REPO_REQUEST = 'GIT/OPEN_REPO_REQUEST'
export const OPEN_REPO = 'GIT/OPEN_REPO'
export const OPEN_REPO_FAILURE = 'GIT/OPEN_REPO_FAILURE'

export const actions = {
  openRepo: (path) => {
    return (dispatch) => {
      dispatch({ type: OPEN_REPO_REQUEST, path })

      // Git.Repository
      //   .open(path)
      //   .then((repo) => {
      //     dispatch({ type: OPEN_REPO, repo })
      //   })
      //   .catch((error) => {
      //     dispatch({ type: OPEN_REPO_FAILURE, error })
      //   })
    }
  },
}
