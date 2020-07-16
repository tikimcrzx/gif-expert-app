import { getGifs } from '../../helpers/getGifs';

describe('Test helper getGifs Fetch', () => {
  test('Get 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('Get 10 elements', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
