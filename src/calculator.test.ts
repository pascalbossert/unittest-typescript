import { add, subtract, multiply } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 4; // Geändert von 2 auf 4
  const b: number = 3;
  const expected: number = 7; // Erwartungswert angepasst


  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});


test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by four is twelve", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  // Act
  const actual = multiply(a, b); // Fehler: Funktion existiert noch nicht

  // Assert
  expect(actual).toBe(expected);
});
