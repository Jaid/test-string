import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: testString} = indexModule

const haystack = "Warum liegt da Stroh?"

it("should run", () => {
  expect(testString(haystack, "Stroh")).toBeTruthy()
  expect(testString(haystack, "stroh")).toBeFalsy()
  expect(testString(haystack, string => string.length === haystack.length)).toBeTruthy()
  expect(testString(haystack, string => string.startsWith("Wieso"))).toBeFalsy()
  expect(testString(haystack, /^warum liegt da [a-z]+\?$/i)).toBeTruthy()
  expect(testString(haystack, /^warum liegt da [a-z]+\?$/)).toBeFalsy()
})