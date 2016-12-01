export const parseMessageText = text =>
  text.replace(/ \(.+?(->|\/).+?\)/, '')
