import { standardDeviation } from "./standardDevitation";

test("standard deviation of an empty list throws error", () => {
  expect(() => standardDeviation([])).toThrow("Liste darf nicht leer sein");
});

test("standard deviation of a single value is zero", () => {
  expect(standardDeviation([3])).toBe(0);
});

test("standard deviation of [1, 3] is 1", () => {
  expect(standardDeviation([1, 3])).toBeCloseTo(1, 2);
});

test("standard deviation of [1, 5] is 2", () => {
  expect(standardDeviation([1, 5])).toBeCloseTo(2, 2);
});

test("standard deviation of [1, 2, 3, 4, 5] is about 1.414", () => {
  expect(standardDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.414, 2);
});
