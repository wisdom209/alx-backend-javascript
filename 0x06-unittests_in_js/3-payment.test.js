const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should call Utils.calculateNumber with same arguments as sendPaymentRequestApi', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    sinon.assert.calledWith(calculateNumberSpy, 'SUM', totalAmount, totalShipping);

    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with same arguments as sendPaymentRequestApi exactly once', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', totalAmount, totalShipping);

    calculateNumberSpy.restore();
  });

  it('should log the correct total', () => {
    const totalAmount = 100;
    const totalShipping = 10;

    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith(`The total is: ${total}`)).to.be.true;
  });

  it('should log the The total is NaN when one argument is not  number', () => {
    const totalAmount = 100;
    const totalShipping = 'b';

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith(`The total is: ${NaN}`)).to.be.true;
  });

  it('should log the The total is NaN when argument is not given', () => {
    const totalAmount = 100;
    const totalShipping = 'b';

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith(`The total is: ${NaN}`)).to.be.true;
  });

  it('should log the reference error when called with undefined argument', () => {
    expect(() => { sendPaymentRequestToApi(100, b); }).to.throw(ReferenceError);
  });
});
