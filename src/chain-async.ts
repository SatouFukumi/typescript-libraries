
/**
 * chaining async procedures
 */
export const chainAsync = async (
  funcs: ((nextFn: Function) => Promise<void> | void)[]
): Promise<void> => {
  let current = 0

  const nextFn = async () => {
    if (current === funcs.length) return
    return funcs[current++](nextFn)
  }

  return nextFn()
}
