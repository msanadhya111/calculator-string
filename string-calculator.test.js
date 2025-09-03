import { add } from "./string-calculator";

describe("string-calculator", () => {
  test("empty string", () => {
    const number = add("");
    expect(number).toBe(0);
  });
  test("handle single number input", () => {
    const str = "5";
    const number = add(str);
    expect(number).toBe(5);
  });
});
