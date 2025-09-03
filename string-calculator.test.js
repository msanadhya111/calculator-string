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
  test("add two comma-separated numbers", () => {
    const number = add("5,6");
    expect(number).toBe(11);
  });
  test("multiple comma-separated numbers", () => {
    const number = add("5,6,8,9,7");
    expect(number).toBe(35);
  });
  test("support newline as delimiter", () => {
    const number = add("1\n2,3");
    expect(number).toBe(6);
  });
  test("support for custom delimiter", () => {
    const number = add("//;\n1;2");
    expect(number).toBe(3);
  });
});
