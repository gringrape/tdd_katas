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

    it('should return [2, 2] with 4', () => {
      expect(primeFactors.generate(4)).toEqual([2, 2]);
    });

    it('should return [2, 3] with 6', () => {
      expect(primeFactors.generate(6)).toEqual([2, 3]);
    });

    it('should return [2, 2, 2] with 8', () => {
      expect(primeFactors.generate(8)).toEqual([2, 2, 2]);
    });

    it('should return [3, 3] with 9', () => {
      expect(primeFactors.generate(9)).toEqual([3, 3]);
    });

    it('should return [2, 2, 3, 5, 7, 11] with 4620', () => {
      expect(primeFactors.generate(4620)).toEqual([2, 2, 3, 5, 7, 11]);
    });
  });
});
