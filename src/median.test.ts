import { median } from "./median";

test("median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 6, 7, 8];
  const expected: number = 6;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 5, 6, 7, 8];
  const expected: number = (5 + 6) / 2;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow("Liste darf nicht leer sein");
});
