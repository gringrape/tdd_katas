export default class PrimeFactors {
  generate(number) {
    if (number < 2) {
      return [];
    }

    const factor = this._findFactor(number);

    return [factor, ...this.generate(number / factor)];
  }

  _findFactor(number, divisor = 2) {
    if (number % divisor === 0) {
      return divisor;
    }

    return this._findFactor(number, divisor + 1);
  }
}

// 염두에 둔것
// 1. 하나의 함수는 하나의 역할만 한다.
// 2. 추상화 계층은 하나로 유지한다.
