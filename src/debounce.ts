import type { MilliSec } from "./types"

/**
 * Returns the debounce version of a procedure
 */
export const debounce = function <P extends any[]>(
  fn: (...args: P) => void,
  debounce: MilliSec
) {
  let timer: NodeJS.Timeout
  const thisArg = this
  const boundFn: typeof fn = fn.bind(thisArg)

  return function (...args: Parameters<typeof fn>): void {
    clearTimeout(timer)

    timer = setTimeout(() => boundFn(...args), debounce)
  }
}
