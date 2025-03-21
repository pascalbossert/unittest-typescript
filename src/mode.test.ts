import { mode } from "./mode";

test("mode of a single element", () => {
  expect(mode([1])).toEqual([1]);
});

test("mode of two identical elements", () => {
  expect(mode([1, 1])).toEqual([1]);
});

test("mode of three elements, with one being most frequent", () => {
  expect(mode([1, 1, 2])).toEqual([1]);
});

test("mode of two most frequent elements", () => {
  expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
});

test("mode of multiple numbers", () => {
  expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]);
});

test("mode of three numbers with equal frequency", () => {
  expect(mode([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

test("mode when one number is most frequent", () => {
  expect(mode([1, 1, 2, 2, 3, 3, 3])).toEqual([3]);
});

test("mode when all numbers are equally frequent", () => {
  expect(mode([1, 1, 2, 2, 3, 3, 3, 3])).toEqual([3]);
});
