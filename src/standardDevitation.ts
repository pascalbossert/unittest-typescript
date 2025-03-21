export function standardDeviation(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Liste darf nicht leer sein");
    }
    
    if (numbers.length === 1) {
      return 0;
    }
  
    // Mittelwert berechnen
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  
    // Varianz berechnen
    const variance =
      numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) /
      numbers.length;
  
    // Standardabweichung ist die Wurzel der Varianz
    return Math.sqrt(variance);
  }
  