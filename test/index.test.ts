import { clientSideHelpers, cursor } from "../lib"
import { throttled } from "../src"

it("> clientSideHelpers", () => {
  expect(clientSideHelpers.isMobile).toBe(false)
})

it("> cursor", () => {
  expect(cursor.deltaX).toBe(0)
})

it("> throttle", () => {
  const fn = async function <T>(value: T) {
    console.table({ this: this, value })
    
    return { this: this, value }
  }

  const throttledFn: typeof fn = throttled.bind({ foo: "bar" })(fn, 300)
  throttledFn(12)

  expect(typeof throttledFn).toBe('function')
})
