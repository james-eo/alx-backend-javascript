import uploadPhoto from '../5-photo-reject.js';

test('uploadPhoto rejects correctly', async () => {
  try {
    await uploadPhoto('guillaume.jpg');
  } catch (error) {
    expect(error).toStrictEqual(new Error('guillaume.jpg cannot be processed'));
  }
});
