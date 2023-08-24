const request = require('request');
const { expect } = require('chai');

describe('make api call to index page', () => {
  it('should return Welcome to the payment system', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });

  it('should have status code of 200 when going to index page', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should have content-type as text/html; charset=utf-8', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have content-length equal to 29', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(response.headers['content-length']).to.equal('29');
    });
  });
});

describe('make api calls to the cart page', () => {
  it('should return Payment methods for cart 83 when cart id is 83', () => {
    const url = 'http://localhost:7865/cart/83';
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 83');
    });
  });

  it('should return status code 200 when cart id is 83', () => {
    const url = 'http://localhost:7865/cart/83';
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return status code 404 when cart id is not an integer', () => {
    const url = 'http://localhost:7865/cart/hello';
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
  });
});

describe('Test suite for /available_payments endpoint', () => {
  it('should return given payments when accessing it', () => {
    const url = 'http://localhost:7865/available_payments';

    request.get(url, (err, response, body) => {
      const expectedReturn = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedReturn);
    });
  });

  it('should return a status code of 200 when accessing it', () => {
    const url = 'http://localhost:7865/available_payments';

    request.get(url, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });
});
describe('Test suite for /login endpoint', () => {
  it('should return Welcome :username when accessing it', () => {
    const url = 'http://localhost:7865/login';

    request.post(url, { json: { userName: 'Wisdom' } }, (err, response, body) => {
      expect(body).to.equal('Welcome Wisdom');
    });
  });

  it('should return a status code of 200 when accessing it', () => {
    const url = 'http://localhost:7865/login';

    request.post(url, { json: { userName: 'Wisdom' } }, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return a status code of 400 when a request without username is made', () => {
    const url = 'http://localhost:7865/login';

    request.post(url, { json: { user: 'James' } }, (err, response, body) => {
      expect(response.statusCode).to.equal(400);
    });
  });
});
