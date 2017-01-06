const initialState = {
  activeRepoPath: '/Users/case/Github/sync',
}

export const reducer = (state = initialState, action) => {
  const handler = {
  }[action.type]
  return handler ? handler() : state
}

export const actions = {

}

export const selectors = {
  getActiveRepoPath: state => state.activeRepoPath,
}
