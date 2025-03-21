import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 8];
  const expected: number = (2 + 8) / 2; // = 5

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});
