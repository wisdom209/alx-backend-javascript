const { expect } = require('chai')
const getPaymentTokenFromApi = require('./6-payment_token')

describe('6-payment_token.getPaymentTokenFromApi()', () => {
	
	it('should return asynchronous response', (done) => {	
		getPaymentTokenFromApi(true).then((result) => {
			expect(result.data).to.equal('Successful response from the API')
			done()
		})
	})
})
