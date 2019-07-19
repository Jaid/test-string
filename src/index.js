/** @module test-string */

import {isString, isFunction, isRegExp} from "lodash"

/**
 * @function
 * @param {string} haystack
 * @param {string|Function|RegExp} tester
 * @returns {boolean} `true` if given `tester` says that given `haystack` matches the conditions
 * @example
 * import testString from "test-string"
 * const result = testString("hello", string => string.startsWith("hell"))
 * result === true
 */
export default (haystack, tester) => {
  if (!isString(haystack)) {
    haystack = String(haystack)
  }

  if (tester |> isString) {
    return haystack.includes(tester)
  }

  if (tester |> isFunction) {
    return tester(haystack)
  }

  if (tester |> isRegExp) {
    return tester.test(haystack)
  }

  return false
}