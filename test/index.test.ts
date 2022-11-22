import { clientSideHelpers, cursor } from '../lib'

it("> clientSideHelpers", () => {
  expect(clientSideHelpers.isMobile).toBe(false)
})

it("> cursor", () => {
  expect(cursor.deltaX).toBe(0)
})
