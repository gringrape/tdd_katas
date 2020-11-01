import PrimeFactors from './primeFactors';

describe('PrimeFactors', () => {
  describe('generate', () => {
    it('returns [] with 1', () => {
      const primeFactors = new PrimeFactors();
    
      expect(primeFactors.generate(1)).toEqual([]);
    });

    it('returns [2] with 2', () => {
      const primeFactors = new PrimeFactors();
    
      expect(primeFactors.generate(2)).toEqual([2]);
    });

    it('returns [2, 2] with 4', () => {
      const primeFactors = new PrimeFactors();
    
      expect(primeFactors.generate(4)).toEqual([2, 2]);
    });

    it('returns [2, 3] with 6', () => {
      const primeFactors = new PrimeFactors();
    
      expect(primeFactors.generate(6)).toEqual([2, 3]);
    });

    it('returns [2, 2, 2] with 8', () => {
      const primeFactors = new PrimeFactors();
    
      expect(primeFactors.generate(8)).toEqual([2, 2, 2]);
    });
  });
});
