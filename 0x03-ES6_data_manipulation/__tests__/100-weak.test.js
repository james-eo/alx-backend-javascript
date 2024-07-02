import { queryAPI, weakMap } from '../100-weak.js';

describe('queryAPI and weakMap', () => {
  it('should track API calls and throw error on high load', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    for (let i = 0; i < 4; i++) {
      queryAPI(endpoint);
    }

    expect(weakMap.get(endpoint)).toBe(4);

    expect(() => queryAPI(endpoint)).toThrow('Endpoint load is high');
  });

  it('should use separate counters for different endpoints', () => {
    const endpoint1 = { protocol: 'http', name: 'getUsers' };
    const endpoint2 = { protocol: 'http', name: 'getProducts' };

    queryAPI(endpoint1);
    queryAPI(endpoint1);
    queryAPI(endpoint2);

    expect(weakMap.get(endpoint1)).toBe(2);
    expect(weakMap.get(endpoint2)).toBe(1);
  });
});
