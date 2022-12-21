/**
 * Returns a rounded number with a specified number of fraction digit(s).
 *
 * @param       number                value to be rounded
 * @param       fractionDigits        the decimal place(s)
 */
export const getRounded = function (number: number, fractionDigits = 0): number {
  return Number(number.toFixed(fractionDigits))
}

/**
 * Returns a number greater than `min` and smaller than `max`.
 */
export const getClamp = function (
  min: number,
  dynamicValue: number,
  max: number
): number {
  if (min > max)
    throw new Error(`'clamp()' : 'min' - ${min} is greater than 'max' - ${max}`)

  return Math.min(Math.max(min, dynamicValue), max)
}

/**
 * Returns a random number which :
 * - is greater than or equal `min` and smaller than or equal to `margin.min` (`min` <= `getRandomBetween(...)` <= `margin.min`).
 *
 * or
 *
 * - is smaller than or equal `max` and greater than or equal to `margin.max` (`margin.max` <= `getRandomBetween(...)` <= `max`).
 *
 * ---
 *
 * Can optionally return an integer or a double.
 *
 * ---
 *
 * ```ts
 *
 * // default
 * { toInteger: true, margin: undefined }
 * ```
 */
export const getRandomBetween = (
  min: number,
  max: number,
  {
    toInteger = true,
    margin = undefined,
  }: { toInteger?: boolean; margin?: { min: number; max: number } } = {}
): number => {
  if (min > max)
    throw new Error(`'math.clamp()' : 'min' - ${min} is greater than 'max' - ${max}`)

  if (!!margin && margin.min > margin.max)
    throw new Error(
      `'math.clamp()' : 'margin.min' - ${margin.min} is greater than 'margin.max' - ${margin.max}`
    )

  // 0 <= Math.random() < 1
  const result = toInteger
    ? min + Math.floor(Math.random() * (max - min + 1))
    : min + Math.random() * (max - min)

  if (!!margin && result > margin.min && result < margin.max)
    return getRandomBetween(min, max, { toInteger, margin })

  return result
}
