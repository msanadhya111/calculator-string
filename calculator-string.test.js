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
  test("string with two or more number", () => {
    const str = "5,6,7";
    const number = add(str);
    expect(number).toBe(18);
  });
  test("string with two or more any type of positive number", () => {
    const str = "5,6.2,7.2,4.3";
    const number = add(str);
    expect(number).toBe(22.7);
  });
  test("string with new line delimeter inbetween them instead of comma", () => {
    const str = "1\n2,3";
    const number = add(str);
    expect(number).toBe(6);
  });
});