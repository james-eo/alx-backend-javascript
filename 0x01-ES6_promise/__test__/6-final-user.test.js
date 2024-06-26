import handleProfileSignup from '../6-final-user';
import signUpUser from '../4-user-promise';
import uploadPhoto from '../5-photo-reject';

jest.mock('../4-user-promise');
jest.mock('../5-photo-reject');

describe('handleProfileSignup', () => {
  it('should handle successful signup and photo upload', async () => {
    signUpUser.mockResolvedValue({ firstName: 'Bob', lastName: 'Dylan' });
    uploadPhoto.mockResolvedValue('bob_dylan.jpg');

    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    
    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
      { status: 'fulfilled', value: 'bob_dylan.jpg' },
    ]);
  });

  it('should handle failed photo upload', async () => {
    signUpUser.mockResolvedValue({ firstName: 'Bob', lastName: 'Dylan' });
    uploadPhoto.mockRejectedValue(new Error('bob_dylan.jpg cannot be processed'));

    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    
    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
      { status: 'rejected', value: new Error('bob_dylan.jpg cannot be processed') },
    ]);
  });

  it('should handle failed signup', async () => {
    signUpUser.mockRejectedValue(new Error('Signup failed'));
    uploadPhoto.mockResolvedValue('bob_dylan.jpg');

    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    
    expect(result).toEqual([
      { status: 'rejected', value: new Error('Signup failed') },
      { status: 'fulfilled', value: 'bob_dylan.jpg' },
    ]);
  });

  it('should handle both promises rejected', async () => {
    signUpUser.mockRejectedValue(new Error('Signup failed'));
    uploadPhoto.mockRejectedValue(new Error('bob_dylan.jpg cannot be processed'));

    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    
    expect(result).toEqual([
      { status: 'rejected', value: new Error('Signup failed') },
      { status: 'rejected', value: new Error('bob_dylan.jpg cannot be processed') },
    ]);
  });
});
