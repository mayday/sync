import git from 'simple-git/promise'

const defaults = {

}

export const GIT_API = 'REDUX_GIT/API'

export default (opts = {}) => () => next => (action) => {
  const apiAction = action && action[GIT_API]
  if (typeof apiAction === 'undefined' || !apiAction) { return next(action) }

  const options = { ...defaults, ...opts } // eslint-disable-line
  const { path, method, types, args = [], model } = apiAction
  const [REQUEST, SUCCESS, ERROR] = types

  REQUEST && next({ type: REQUEST })

  return new Promise((resolve, reject) => {
    git(path)[method](...args)
      .then((res) => {
        SUCCESS && next({ type: SUCCESS, [model || method]: res })
        resolve({ ...res, path })
      })
      .catch((errorText) => {
        ERROR && next({ type: ERROR, errorText })
        reject({ errorText, path })
      })
  })
}
