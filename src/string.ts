export const truncate = function (
  str: string,
  length: number,
  suffix: string = "..."
) {
  return str.length > length
    ? str.substring(0, length - suffix.length - 1) + suffix
    : str
}
