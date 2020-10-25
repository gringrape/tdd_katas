export default class PrimeFactors {
  generate(number) {
    if (number < 2) {
      return [];
    }
    return [number];
  }
}
