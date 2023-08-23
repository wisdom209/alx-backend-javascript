const request = require('request')
const { expect } = require('chai')

describe("make api call to index page", () => {
	
	it('should return Welcome to the payment system', ()=>{
		const url = 'http://localhost:7865';
		request.get(url, (error, response, body) => {
			expect(body).to.equal('Welcome to the payment system')
		})
	})

	it('should have status code of 200 when going to index page', ()=>{
		const url = 'http://localhost:7865';
		request.get(url, (error, response, body) => {
			expect(response.statusCode).to.equal(200)
		})
	})

	it('should have content-type as text/html; charset=utf-8', ()=>{
		const url = 'http://localhost:7865';
		request.get(url, (error, response, body) => {
			expect(response.headers['content-type']).to.equal('text/html; charset=utf-8')
		})
	})	
	
	it('should have content-length equal to 29', ()=>{
		const url = 'http://localhost:7865';
		request.get(url, (error, response, body) => {
			expect(response.headers['content-length']).to.equal('29')
		})
	})


})
