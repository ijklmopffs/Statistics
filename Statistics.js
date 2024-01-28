class CentralTendencyCalculator {
  constructor(data) {
    this.data = data;
  }

  calculateMean() {
    const sum = this.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / this.data.length;
  }

  calculateMedian() {
    const sortedData = [...this.data].sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  calculateMode() {
    const frequencyMap = new Map();

    this.data.forEach((value) => {
      const count = frequencyMap.get(value) || 0;
      frequencyMap.set(value, count + 1);
    });

    let maxFrequency = 0;
    let mode = [];

    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mode = [value];
      } else if (frequency === maxFrequency) {
        mode.push(value);
      }
    });

    return mode.length === this.data.length ? [] : mode;
  }
}

const data = [4, 5, 7, 4, 10, 6, 9, 3, 11, 6];
const centralTendencyCalculator = new CentralTendencyCalculator(data);

console.log("Mean:", centralTendencyCalculator.calculateMean());
console.log("Median:", centralTendencyCalculator.calculateMedian());
console.log("Mode:", centralTendencyCalculator.calculateMode());
