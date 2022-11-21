import { clientSideHelpers } from '../lib'

it("> clientSideHelpers", () => {
  expect(clientSideHelpers.isMobile).toBe(false)
})
