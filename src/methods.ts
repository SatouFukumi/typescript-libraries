import type { MilliSec } from "./types"

/**
 * chaining async procedures
 */
export async function chain(
  funcs: ((nextFn: Function) => Promise<void> | void)[]
): Promise<void> {
  let current = 0

  async function nextFn() {
    if (current === funcs.length) return
    return funcs[current++](nextFn)
  }

  return nextFn()
}

/**
 * Returns the throttle version of a procedure
 */
export function throttle<P extends any[]>(
  this: any,
  fn: (...args: P) => void,
  throttle: MilliSec
) {
  const context: any = this

  let throttling: boolean = false

  return function (...args: Parameters<typeof fn>): void {
    if (throttling) return
    throttling = true

    setTimeout((): boolean => (throttling = false), throttle)

    fn.call(context, ...args)
  }
}

/**
 * Returns the debounce version of a procedure
 */
export function debounce<P extends any[]>(
  this: any,
  fn: (...args: P) => void,
  debounce: MilliSec,
  firstCall: boolean = false
) {
  const context = this

  let timer: NodeJS.Timeout
  let toCall = firstCall

  return function (...args: Parameters<typeof fn>): void {
    if (toCall) {
      toCall = false
      fn.call(context, ...args)
    }

    clearTimeout(timer)

    timer = setTimeout(() => fn.call(context, ...args), debounce)
  }
}

/**
 * Returns the throttled version of a procedure
 */
export function throttled<P extends any[]>(
  this: any,
  fn: (...args: P) => void,
  throttled: number
) {
  const context: any = this

  const t: (...args: Parameters<typeof fn>) => any = throttle.bind(context)(
    fn,
    throttled
  )
  const d: (...args: Parameters<typeof fn>) => any = debounce.bind(context)(
    fn,
    throttled
  )

  return function (...args: Parameters<typeof fn>): void {
    t.call(context, ...args)
    d.call(context, ...args)
  }
}
