import type { MilliSec } from "./types"

/**
 * Returns the debounced version of a procedure
 */
const debounced = function <P extends any[]>(
  fn: (...args: P) => void,
  debounce: MilliSec
) {
  let timer: NodeJS.Timeout
  let toCall = true

  return (...args: Parameters<typeof fn>): void => {
    if (toCall) {
      toCall = false
      fn.bind(this)(...args)
    }

    clearTimeout(timer)
    timer = setTimeout(() => fn.bind(this)(...args), debounce)
  }
}

export default debounced
