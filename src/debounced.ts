import type { MilliSec } from "./types"

/**
 * Returns the debounced version of a procedure
 */
export const debounced = function <P extends any[]>(
  fn: (...args: P) => void,
  debounce: MilliSec
) {
  let timer: NodeJS.Timeout
  let toCall = true
  const thisArg = this
  const boundFn: typeof fn = fn.bind(thisArg)

  return function (...args: Parameters<typeof fn>): void {
    if (toCall) {
      toCall = false
      boundFn(...args)
    }

    clearTimeout(timer)

    timer = setTimeout(() => boundFn(...args), debounce)
  }
}
