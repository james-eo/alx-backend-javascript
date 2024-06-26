import handleResponseFromAPI from '../2-then.js';

test('handleResponseFromAPI resolves correctly', async () => {
  const promise = Promise.resolve();
  const response = await handleResponseFromAPI(promise);
  expect(response).toStrictEqual({ status: 200, body: 'success' });
});

test('handleResponseFromAPI rejects correctly', async () => {
  const promise = Promise.reject();
  const response = await handleResponseFromAPI(promise);
  expect(response).toStrictEqual(new Error());
});

test('handleResponseFromAPI logs response message', async () => {
  jest.spyOn(console, 'log').mockImplementation();
  const promise = Promise.resolve();
  await handleResponseFromAPI(promise);
  expect(console.log).toHaveBeenCalledWith('Got a response from the API');
});
