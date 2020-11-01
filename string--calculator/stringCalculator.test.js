import { calculate } from './stringCalculator';

describe('calculate', () => {
  it('returns 0 with empty string', () => {
    expect(calculate('')).toBe(0);
  });

  it('returns the value with single number', () => {
    expect(calculate('1')).toBe(1);
    expect(calculate('3')).toBe(3);
  });

  it('returns the sum with two numbers delimited with comma', () => {
    expect(calculate('1,2')).toBe(3);
    expect(calculate('10,20')).toBe(30);
  });

  it('returns the sum with two numbers delimited with newline', () => {
    expect(calculate('1\n2')).toBe(3);
    expect(calculate('10\n20')).toBe(30);
  });

  it('returns the sum with three numbers delimited either way', () => {
    expect(calculate('1\n2,3\n4')).toBe(10);
  });

  it('throw exception with negative numbers string', () => {
    expect(() => {
      calculate('-1,2,-3')
    }).toThrowError(/negatives not allowed: -1,-3/);
  });

  it('numbers greater than 1000 are ignored', () => {
    expect(calculate('1\n2,3\n4,5000\n15,1001')).toBe(25);
  });

  it('single char delimiter can be defined', () => {
    expect(calculate('//#\n1#2#3#4,5000#15,1001')).toBe(25);
  });
});
