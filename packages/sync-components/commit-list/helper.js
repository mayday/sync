export const parseMessageText = text =>
  text.replace(/ \(.+?(->|\/).+?\)/, '')

export const loop = (i, length) => {
  const first = i === 0
  const last = i === length - 1
  return { position: (first && 'first') || (last && 'last') || 'middle' }
}
