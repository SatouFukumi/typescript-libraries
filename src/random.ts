import { randomBetween } from "./math"

/**
 * Returns a random item inside of passed list
 */
export const randomItem = function <T extends any>(list: T[]): T {
  return list[randomBetween(0, list.length - 1)]
}

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
export const randomString = function (
  length: number = 16,
  charSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let str = ""

  for (let i = 0; i < length; ++i)
    str += charSet[randomBetween(0, charSet.length - 1)]

  return str
}

/**
 * Returns a random number that fits to convert into colors
 */
export const randomColor = function (): number {
  return Math.floor(Math.random() * 16777215)
}

/**
 * Returns a random hex color string
 * 
 * @example
 * ```ts
 * randomHexColor() // "000fff"
 * ```
 */
export const randomHexColor = function () {
  return randomColor().toString(16).padStart(6, "0")
}
