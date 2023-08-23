const sendPaymentRequestToApi = require('./5-payment')
const sinon = require('sinon')
const { expect } = require('chai')

describe('sendPaymentRequestApi', () => {
	let consoleLogSpy;

	beforeEach(() => {
		consoleLogSpy = sinon.spy(console, 'log')
	})

	afterEach(() => {
		consoleLogSpy.restore()
	})

	it('should verify correct output when called with 100 and 20', () => {
		sendPaymentRequestToApi(100, 20);
		expect(consoleLogSpy.calledOnceWith('The total is: 120'))		
	})

	it('should call verify correct output when called with 10 and 10', () => {
		sendPaymentRequestToApi(10, 10);
		expect(consoleLogSpy.calledOnceWith('The total is: 20'))
	})
})
