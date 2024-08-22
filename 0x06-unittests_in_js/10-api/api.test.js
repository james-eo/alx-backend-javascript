const request = require('request');
const { expect } = require('chai');
const app = require('./api'); 

describe('Available Payments', () => {
  it('should return correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});

describe('Login', () => {
  it('should return correct welcome message', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'Betty' } },
      (error, response, body) => {
        expect(response.body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
