import _ from 'lodash'

import Toast from './toast'

export const TOAST = 'NOTIFICATIONS/TOAST'
export const REMOVE_TOAST = 'NOTIFICATIONS/REMOVE_TOAST'

const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${ s4() + s4() }-${ s4() }-${ s4() }-${ s4() }-${ s4() }${ s4() }${ s4() }`
}

export const reducer = (state = [], action) => {
  const handler = {
    [TOAST]: () => [...state, action.toast],
    [REMOVE_TOAST]: () => _.reject(state, { id: action.id }),
  }[action.type]
  return handler ? handler() : state
}

export const middleware = () => next => (action) => {
  // Lets get these errros all hack like for V1
  if (action.type.indexOf('_FAILURE') > -1) {
    // TODO: These are prinint out 3 times?
    const message = action.errorText.message
    const id = guid()
    next({ type: TOAST, toast: { message, id } })

    setTimeout(() => {
      next({ type: REMOVE_TOAST, id })
    }, 4000)
  }

  next(action)
}

export const selectors = {
  getRecentToast: state => state[0],
}

export const ui = [{
  context: 'body',
  component: Toast,
}]
