import handleProfileSignup from '../6-final-user.js';

test('handleProfileSignup handles all promises', async () => {
  const response = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  expect(response).toStrictEqual([
    { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
    { status: 'rejected', value: new Error('bob_dylan.jpg cannot be processed') },
  ]);
});
