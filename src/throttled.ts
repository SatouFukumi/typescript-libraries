import { debounce } from "./debounce"
import { throttle } from "./throttle"
import type { MilliSec } from "./types"

/**
 * Returns the throttled version of a procedure
 */
export const throttled = function <P extends any[]>(
  fn: (...args: P) => void,
  throttled: MilliSec
) {
  const thisArg = this
  const t: typeof fn = throttle.bind(thisArg)(fn, throttled)
  const d: typeof fn = debounce.bind(thisArg)(fn, throttled)

  return function (...args: Parameters<typeof fn>): void {
    t(...args)
    d(...args)
  }
}
