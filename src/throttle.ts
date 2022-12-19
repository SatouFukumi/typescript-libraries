import type { MilliSec } from "./types"

/**
 * Returns the throttle version of a procedure
 */
export const throttle = function <P extends any[]>(
  fn: (...args: P) => void,
  throttle: MilliSec
) {
  let throttling: boolean = false
  const thisArg = this
  const boundFn: typeof fn = fn.bind(thisArg)

  return function (...args: Parameters<typeof fn>): void {
    if (throttling) return
    throttling = true

    setTimeout((): boolean => (throttling = false), throttle)

    boundFn(...args)
  }
}
