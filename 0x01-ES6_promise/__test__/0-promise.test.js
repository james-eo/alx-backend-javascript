import getResponseFromAPI from '../0-promise.js';

test('getResponseFromAPI returns a Promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});

test('getResponseFromAPI resolves with "Success"', async () => {
  const response = await getResponseFromAPI();
  expect(response).toBe('Success');
});
