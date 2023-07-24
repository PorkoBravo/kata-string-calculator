import { calculate } from "../core/StringCalculator";

describe("When a expression is given, should", () => {
    it("return 0 when empty expression", () => {
        expect(calculate("")).toBe(0);
    })

    it("return 0 when null expression", () => {
        expect(calculate(null as unknown as string)).toBe(0);
    })

    it("return the same number given as an expression", () => {
        expect(calculate("5")).toBe(5)
    })

    it("sum all numbers separated by comma", () => {
        expect(calculate("2,2")).toBe(4)
    })

    it("ignoring non numeric symbols", () => {
        expect(calculate("2,a,b,c,2")).toBe(4)
    })

    it("sum all numbers given a specific delimiter", () => {
        expect(calculate("10|10|20")).toBe(40)
    })
})