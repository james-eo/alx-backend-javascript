import signUpUser from '../4-user-promise.js';

test('signUpUser resolves correctly', async () => {
  const response = await signUpUser('Bob', 'Dylan');
  expect(response).toStrictEqual({ firstName: 'Bob', lastName: 'Dylan' });
});
