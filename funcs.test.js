import { capitalize, reverseString, analyze, calculator } from "./funcs";

test("capitalizes hello to be Hello", () => {
    expect(capitalize("hello")).toBe("Hello")
})
test("reverses hello to be olleh", () => {
    expect(reverseString("hello")).toBe("olleh")
})
test("1 + 2 to be 3", () => {
    expect(calculator.add(1, 2)).toBe(3)
})
test("2 - 1 to be 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1)
})
test("3 * 2 to be 6", () => {
    expect(calculator.multiply(3, 2)).toBe(6)
})
test("6 * 2 to be 3", () => {
    expect(calculator.divide(6, 2)).toBe(3)
})
test("minimal value of [1,8,3,4,2,6] is 1", () => {
    expect(analyze([1,8,3,4,2,6]).min).toBe(1)
})
test("average value of [1,8,3,4,2,6] is 4", () => {
    expect(analyze([1,8,3,4,2,6]).average).toBe(4)
})