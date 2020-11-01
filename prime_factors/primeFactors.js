export default class PrimeFactors {
  generate(number) {
    if (number < 2) {
      return [];
    }

    const smallestFactor = this._findSmallestFactor(number);

    return [
      smallestFactor,
      ...this.generate(number / smallestFactor)
    ];
  }

  _findSmallestFactor(number, acc = 2) {
    if (number % acc === 0) {
      return acc;
    }

    return this._findSmallestFactor(number, acc + 1);
  }
}