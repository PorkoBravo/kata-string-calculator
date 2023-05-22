import { calculate } from "../core/StringCalculator";

describe("When a expression is given, should", () => {
    it("return 0 when empty expression", () => {
        expect(calculate("")).toBe(0);
    })
})