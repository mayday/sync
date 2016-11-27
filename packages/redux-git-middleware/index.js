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
  const { path, method, types, args = [], model } = apiAction
  const gitPath = path || _.get(state, options.path)
  const [REQUEST, SUCCESS, ERROR] = types

  REQUEST && next({ type: REQUEST })

  return new Promise((resolve, reject) => {
    git(gitPath)[method](...args)
      .then((res) => {
        SUCCESS && next({ type: SUCCESS, [model || method]: res, path: gitPath })
        resolve({ ...res, path: gitPath })
      })
      .catch((errorText) => {
        const data = { errorText, path: gitPath }
        ERROR && next({ type: ERROR, ...data })
        reject(data)
      })
  })
}
