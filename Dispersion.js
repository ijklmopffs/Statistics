class DispersionCalculator {
  constructor(data) {
    this.data = data;
  }

  calculateRange() {
    const sortedData = [...this.data].sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map((value) =>
      Math.pow(value - mean, 2)
    );
    return (
      squaredDifferences.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / this.data.length
    );
  }

  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  calculateMeanDeviation() {
    const mean = this.calculateMean();
    return (
      this.data.reduce(
        (accumulator, value) => accumulator + Math.abs(value - mean),
        0
      ) / this.data.length
    );
  }

  calculateQuartileDeviation() {
    const firstQuartile = this.calculatePercentile(this.data, 25);
    const thirdQuartile = this.calculatePercentile(this.data, 75);
    return (thirdQuartile - firstQuartile) / 2;
  }

  calculateMean() {
    const sum = this.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / this.data.length;
  }

  calculatePercentile(sortedData, percentile) {
    const index = Math.ceil((percentile / 100) * sortedData.length) - 1;
    return sortedData[index];
  }
}

const data = [6, 7, 9, 6, 12, 8, 11, 5, 13, 8];
const dispersionCalculator = new DispersionCalculator(data);

console.log("Range:", dispersionCalculator.calculateRange());
console.log("Variance:", dispersionCalculator.calculateVariance());
console.log(
  "Standard Deviation:",
  dispersionCalculator.calculateStandardDeviation()
);
console.log("Mean Deviation:", dispersionCalculator.calculateMeanDeviation());
console.log(
  "Quartile Deviation:",
  dispersionCalculator.calculateQuartileDeviation()
);
