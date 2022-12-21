import type { MilliSec } from "./types"

/**
 * Returns the throttle version of a procedure
 */
const throttle = function <P extends any[]>(
  fn: (...args: P) => void,
  throttle: MilliSec
) {
  let throttling: boolean = false

  return (...args: Parameters<typeof fn>): void => {
    if (throttling) return
    throttling = true

    setTimeout((): boolean => (throttling = false), throttle)

    fn.bind(this)(...args)
  }
}

export default throttle
