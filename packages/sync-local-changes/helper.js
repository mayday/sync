
export const trimPath = (string) => {
  if (string.length > 22) {
    return `${ string.substr(0, 11) }...${ string.substr(string.length - 11, string.length) }`
  }
  return string
}
