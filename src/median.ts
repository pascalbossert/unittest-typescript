export function median(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Liste darf nicht leer sein");
    }
  
    // Sortiere die Zahlenreihe
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);
  
    if (sortedNumbers.length % 2 === 1) {
      // Ungerade Anzahl von Elementen → mittleres Element zurückgeben
      return sortedNumbers[middle];
    } else {
      // Gerade Anzahl von Elementen → Durchschnitt der beiden mittleren Werte
      return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    }
  }
  