import PrimeFactors from './primeFactors';

describe('primeFactors', () => {
  const primeFactors = new PrimeFactors();
  
  describe('generate', () => {
    it('should return [] with 1', () => {
      expect(primeFactors.generate(1)).toEqual([]);
    });

    it('should return [2] with 2', () => {
      expect(primeFactors.generate(2)).toEqual([2]);
    });
  });
});
