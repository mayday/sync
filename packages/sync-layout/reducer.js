
export const CHANGE_ACTIVE_UI = 'LAYOUT/CHANGE_ACTIVE_UI'

const initialState = {
  activeRepoPath: '/Users/case/Github/sync',

  activeUI: {
    actionBar: 'sync-local-changes',
  },
}

export const reducer = (state = initialState, action) => {
  const handler = {
    [CHANGE_ACTIVE_UI]: () => ({
      ...state,
      activeUI: {
        ...state.activeUI,
        [action.scope]: action.value,
      },
    }),
  }[action.type]
  return handler ? handler() : state
}

export const actions = {
  changeActiveUI: (scope, value) => ({ type: CHANGE_ACTIVE_UI, scope, value }),
}

export const selectors = {
  getActiveRepoPath: state => state.activeRepoPath,
  getActiveUI: state => state.activeUI,
}
