
export const middleware = () => next => (action) => {
  if (action.type === 'PLUGIN/LOCAL_CHANGES/COMMIT'
      && navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const lat = coords.latitude
      const long = coords.longitude
      next({
        ...action,
        commit: {
          ...action.commit,
          message: `${ action.commit.message }\n\n--\nlat: ${ lat }\nlong: ${ long }`,
        },
      })
    })
  } else {
    next(action)
  }
}
