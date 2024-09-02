import { add } from "./calculator-string";

describe("calculator-string", () => {
  test("empty string", () => {
    const number = add("");
    expect(number).toBe(0);
  });
});