import debounce from "./debounce"
import throttle from "./throttle"
import type { MilliSec } from "./types"

/**
 * Returns the throttled version of a procedure
 */
const throttled = function <P extends any[]>(
  fn: (...args: P) => void,
  throttled: MilliSec
) {
  const t: typeof fn = throttle.bind(this)(fn, throttled)
  const d: typeof fn = debounce.bind(this)(fn, throttled)

  return (...args: Parameters<typeof fn>): void => {
    t(...args)
    d(...args)
  }
}

export default throttled
