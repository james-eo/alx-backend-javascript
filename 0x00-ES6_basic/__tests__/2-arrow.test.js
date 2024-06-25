import getNeighborhoodsList from '../2-arrow.js';

describe('getNeighborhoodsList', () => {
  it('should add new neighborhoods correctly', () => {
    const neighborhoodsList = new getNeighborhoodsList();
    expect(neighborhoodsList.addNeighborhood('Sunset')).toStrictEqual(['SOMA', 'Union Square', 'Sunset']);
  });
});
