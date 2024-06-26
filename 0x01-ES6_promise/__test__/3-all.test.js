import handleProfileSignup from '../3-all.js';
import { uploadPhoto, createUser } from '../utils.js';

jest.mock('../utils.js', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

test('handleProfileSignup logs photo-profile-1 Guillaume Salva', async () => {
  uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  jest.spyOn(console, 'log').mockImplementation();
  await handleProfileSignup();
  expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
});

test('handleProfileSignup handles error correctly', async () => {
  uploadPhoto.mockRejectedValue(new Error('error'));
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  jest.spyOn(console, 'log').mockImplementation();
  await handleProfileSignup();
  expect(console.log).toHaveBeenCalledWith('Signup system offline');
});
