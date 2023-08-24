const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calcul.calculateNumber()', () => {
  it('should return 6 when type is SUM, a is 1.4 and b is 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return -4 when type is SUBTRACT, a is 1.4 and b is 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2 when type is DIVIDE, a is 1.4 and b is 4.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return `Error` when type is DIVIDE, a is 1.4 and b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return undefined when type is not SUM, DIVIDE or Subtract, a is 1.4 and b is 0', () => {
    assert.strictEqual(calculateNumber({}, 1.4, 0), null);
  });

  it('should return NaN when type is SUM, a is {} and b is 0', () => {
    assert.strictEqual(calculateNumber('SUM', {}, 0), NaN);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber('SUM', -1.5, 3.3);
    assert.strictEqual(result, 2);
  });

  it('should not pass when a boolean value is given', () => {
    const result = calculateNumber('SUM', false, 3);
    assert.notStrictEqual(result, NaN);
  });

  it('should throw reference error when given an undefined value', () => {
    assert.throws(() => { calculateNumber(a, 3, 4); }, ReferenceError);
  });
});
