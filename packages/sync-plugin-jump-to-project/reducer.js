
export const TOGGLE_VISIBILITY = 'PLUGIN/JUMP_TO_PROJECT/TOGGLE_VISIBILITY'

const initialState = {
  visibility: false,
}

export const reducer = (state = initialState, action) => {
  const handler = {
    [TOGGLE_VISIBILITY]: () => ({ ...state, visibility: !state.visibility }),
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  toggleVisibility: () => ({ type: TOGGLE_VISIBILITY }),
}

export const selectors = {
  getVisibility: state => state.visibility,
}
