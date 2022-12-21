import { getRandomBetween } from "./math"

const random = {
  /**
   * Returns a random item inside of passed list
   */
  item<T extends any>(list: T[]): T {
    return list[getRandomBetween(0, list.length - 1)]
  },

  /**
   * Returns a random string from passed char set
   *
   * ---
   *
   * ```ts
   *
   * // default
   * length = 16
   * charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
   * ```
   */
  string(
    length: number = 16,
    charSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ) {
    let str = ""

    for (let i = 0; i < length; ++i)
      str += charSet[getRandomBetween(0, charSet.length - 1)]

    return str
  },

  /**
   * Returns a random number that can be converted into colors
   */
  color(): number {
    return getRandomBetween(0, Number(0xffffff))
  },

  /**
   * Returns a random hex color string
   *
   * @example
   * ```ts
   * randomHexColor() // "000fff"
   * ```
   */
  hexColor() {
    return this.color().toString(16).padStart(6, "0")
  },
}

export default random
