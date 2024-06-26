import asyncUploadUser from '../100-await.js';
import { uploadPhoto, createUser } from '../utils';

jest.mock('../utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

test('asyncUploadUser returns correct responses', async () => {
  uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  const result = await asyncUploadUser();
  expect(result).toStrictEqual({
    photo: { status: 200, body: 'photo-profile-1' },
    user: { firstName: 'Guillaume', lastName: 'Salva' },
  });
});

test('asyncUploadUser returns empty object on error', async () => {
  uploadPhoto.mockRejectedValue(new Error('Error uploading photo'));
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  const result = await asyncUploadUser();
  expect(result).toStrictEqual({
    photo: null,
    user: null,
  });
});
