import { median } from "./median";

test("median for odd number of elements", () => {
    // Arrange
    const numbers: number[] = [1, 2, 6, 7, 8, 10, 12]; // Geändert von 5 auf 7 Zahlen
    const expected: number = 7; // Falscher Wert, Test schlägt fehl
  
    // Act
    const actual: number = median(numbers);
  
    // Assert
    expect(actual).toBe(expected);
  });
  
  test("median for even number of elements", () => {
    // Arrange
    const numbers: number[] = [1, 2, 5, 6, 7, 8, 9, 10]; // Geändert von 6 auf 8 Zahlen
    const expected: number = (6 + 7) / 2; // Falscher Wert, Test schlägt fehl
    
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
