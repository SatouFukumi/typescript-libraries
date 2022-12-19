/**
 * Returns a rounded number with a specified number of fraction digit(s).
 *
 * @param       number                value to be rounded
 * @param       fractionDigits        the decimal place(s)
 */
export const round = function (number: number, fractionDigits = 0): number {
  return Number(number.toFixed(fractionDigits))
}

/**
 * Returns a number greater than `min` and smaller than `max`.
 */
export const clamp = function (
  min: number,
  dynamicValue: number,
  max: number
): number {
  if (min > max)
    throw new Error(`'clamp()' : 'min' - ${min} is greater than 'max' - ${max}`)

  return Math.min(Math.max(min, dynamicValue), max)
}

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
export const randomBetween = function (
  min: number,
  max: number,
  {
    toInt = true,
    margin = undefined
  }: { toInt?: boolean; margin?: [number, number] } = {}
): number {
  if (min > max)
    throw new Error(`'math.clamp()' : 'min' - ${min} is greater than 'max' - ${max}`)

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
}
