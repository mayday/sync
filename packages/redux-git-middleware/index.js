import _ from 'lodash'
import git from 'simple-git/promise'

const defaults = {

}

export const GIT_API = 'REDUX_GIT/API'

export default (opts = {}) => store => next => (action) => {
  const apiAction = action && action[GIT_API]
  if (typeof apiAction === 'undefined' || !apiAction) { return next(action) }

  const state = store.getState()
  const options = { ...defaults, ...opts } // eslint-disable-line
  const { path, method, types, args = [], model, passthrough } = apiAction
  const gitPath = path || _.get(state, options.path)
  const [REQUEST, SUCCESS, ERROR] = types

  REQUEST && next({ type: REQUEST })

  return new Promise((resolve, reject) => {
    git(gitPath)[method](...args)
      .then((res) => {
        SUCCESS && next({ type: SUCCESS, [model || method]: res, path: gitPath, ...passthrough })
        resolve({ ...res, path: gitPath, ...passthrough })
      })
      .catch((errorText) => {
        const data = { errorText, path: gitPath, ...passthrough }
        ERROR && next({ type: ERROR, ...data, ...passthrough })
        reject(data)
      })
  })
}
