const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
	consoleLogSpy = sinon.spy(console, 'log')
  });

  afterEach(() => {
	calculateNumberStub.restore()
    consoleLogSpy.restore();
  });

  it('calculateNumberStub should be called with type=SUM, a=100 and b=20', () => {
	const totalAmount = 100;
    const totalShipping = 20;
	
	sendPaymentRequestToApi(totalAmount, totalShipping);
	expect(calculateNumberStub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  })

  it('calculateNumberStub should be called only once', () => {
	const totalAmount = 100;
    const totalShipping = 20;
	
	sendPaymentRequestToApi(totalAmount, totalShipping);
	expect(calculateNumberStub.calledOnce).to.be.true;
  })

  it('console.logSpy should log: The total is: 10', () => {
	sendPaymentRequestToApi(100, 10);
	expect(consoleLogSpy.calledWith("The total is: 10")).to.be.true;
  })

  it('should log the reference error when called with undefined argument', () => {
    expect(() => { sendPaymentRequestToApi(100, b); }).to.throw(ReferenceError);
  });
});
