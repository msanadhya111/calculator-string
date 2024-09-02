import { add } from "./calculator-string";

describe("calculator-string", () => {
  test("empty string", () => {
    const number = add("");
    expect(number).toBe(0);
  });
  test("string with one number", () => {
    const str = "5";
    const number = add(str);
    expect(number).toBe(5);
  });
});