const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('2-calcul_chai.calculateNumber()', () => {
  it('should return 6 when type is SUM, a is 1.4 and b is 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 when type is SUBTRACT, a is 1.4 and b is 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 when type is DIVIDE, a is 1.4 and b is 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return `Error` when type is DIVIDE, a is 1.4 and b is 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return undefined when type is not SUM, DIVIDE or Subtract, a is 1.4 and b is 0', () => {
    expect(calculateNumber({}, 1.4, 0)).to.equal(null);
  });

  it('should return NaN when type is SUM, a is {} and b is 0', () => {
    expect(Number.isNaN(calculateNumber('SUM', {}, 0))).to.be.true;
  });

  it('should throw reference error when given an undefined value', () => {
    expect(() => { calculateNumber(a, 3, 4); }).to.throw(ReferenceError);
  });
});
