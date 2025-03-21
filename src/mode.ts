export function mode(numbers: number[]): number[] {
    if (numbers.length === 0) {
      throw new Error("Liste darf nicht leer sein");
    }
  
    const frequencyMap = new Map<number, number>();
  
    // Häufigkeit jedes Wertes berechnen
    for (const num of numbers) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    // Maximale Häufigkeit bestimmen
    const maxFrequency = Math.max(...frequencyMap.values());
  
    // Alle Zahlen mit maximaler Häufigkeit zurückgeben
    return Array.from(frequencyMap.entries())
      .filter(([_, count]) => count === maxFrequency)
      .map(([num, _]) => num);
  }
  