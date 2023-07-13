import { describe } from "node:test";
import { minNum, maxNum, avgNum } from ".";

describe("minNum", () => {
  test("should return minimum number", () => {
    const numbers = [6, 9, 27, 3, 1];
    const minNumber = minNum(numbers);
    expect(minNumber).toEqual(1);
  });
});

describe("maxNum", () => {
  test("should return maximun number", () => {
    const numbers = [6, 9, 27, 3, 1];
    const maxNumber = maxNum(numbers);
    expect(maxNumber).toEqual(27);
  });
});
