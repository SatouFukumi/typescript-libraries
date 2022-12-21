import type { MilliSec } from "./types"

/**
 * Returns the debounce version of a procedure
 */
const debounce = function <P extends any[]>(
  fn: (...args: P) => void,
  debounce: MilliSec
) {
  let timer: NodeJS.Timeout

  return (...args: Parameters<typeof fn>): void => {
    clearTimeout(timer)
    timer = setTimeout(() => fn.bind(this)(...args), debounce)
  }
}

export default debounce
