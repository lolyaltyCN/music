export const thousands = value => {
  if (!value) {
    return ''
  }
  value = parseInt(value).toString()
  if (value.length > 4) {
    value = value.slice(0, 4) + '万'
  }
  return value
}
