import getFullResponseFromAPI from '../1-promise.js';

test('getFullResponseFromAPI resolves with status 200 and body "Success" when true is passed', async () => {
  const response = await getFullResponseFromAPI(true);
  expect(response).toStrictEqual({ status: 200, body: 'Success' });
});

test('getFullResponseFromAPI rejects with an error message "The fake API is not working currently" when false is passed', async () => {
  try {
    await getFullResponseFromAPI(false);
  } catch (error) {
    expect(error).toStrictEqual(new Error('The fake API is not working currently'));
  }
});
