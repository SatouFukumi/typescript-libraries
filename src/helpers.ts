export const helpers = {
  /**
   * Returns a rounded number with a specified number of decimal place(s).
   *
   * @param       number      value to be rounded
   * @param       at          the decimal place(s)
   */
  round(number: number, at: number = 0): number {
    const dec: number = Math.pow(10, at)
    return Math.round(number * dec) / dec
  },

  /**
   * Returns a number greater than `min` and smaller than `max`.
   */
  clamp(min: number, dynamicValue: number, max: number): number {
    if (min > max)
      throw new Error(
        `'math.clamp()' : 'min' - ${min} is greater than 'max' - ${max}`
      )

    return Math.min(Math.max(min, dynamicValue), max)
  },

  /**
   * Returns a random number greater than `min` and smaller than or equal to `margin[0]`
   * or a random number smaller than `max` and greater than or equal to `margin[1]`.
   *
   * ---
   *
   * Can optionally return an integer or a decimal number.
   *
   * ---
   *
   * ```ts
   *
   * // default
   * { toInt: true, margin: undefined }
   * ```
   */
  randomBetween(
    min: number,
    max: number,
    {
      toInt = true,
      margin = undefined,
    }: { toInt?: boolean; margin?: [number, number] } = {}
  ): number {
    if (min > max)
      throw new Error(
        `'math.clamp()' : 'min' - ${min} is greater than 'max' - ${max}`
      )

    if (!!margin && margin[0] > margin[1])
      throw new Error(
        `'math.clamp()' : 'margin[0]' - ${margin[0]} is greater than 'margin[1]' - ${margin[1]}`
      )

    const result = toInt
      ? Math.floor(Math.random() * (max - min + 1) + min)
      : Math.random() * (max - min + 1) + min

    if (!!margin && result > margin[0] && result < margin[1])
      return this.randomBetween(min, max, { toInt, margin })

    return result
  },

  /**
   * Returns a random item inside of passed list
   */
  randomItem<T extends any>(list: T[]): T {
    return list[this.randomBetween(0, list.length - 1)]
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
  randomString(
    length: number = 16,
    charSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ) {
    let str = ""

    for (let i = 0; i < length; ++i)
      str += charSet[this.randomBetween(0, charSet.length - 1)]

    return str
  },

  /**
   * Returns a random number that fits to convert into colors
   */
  randomColor(): number {
    return Math.floor(Math.random() * 16777215)
  },

  /**
   * Returns a random hex color string
   */
  randomHexColor(length?: 3 | 6) {
    return this.randomColor().toString(16).padStart(6, "0")
  },

  /**
   * Truncates a string and returns it
   */
  truncate(str: string, length: number, suffix: string = "...") {
    return str.length > length
      ? str.substring(0, length - suffix.length - 1) + suffix
      : str
  },
}

export default helpers
