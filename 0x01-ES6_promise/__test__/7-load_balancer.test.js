import loadBalancer from '../7-load_balancer';

describe('loadBalancer', () => {
  it('should return the value of the first resolved promise', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';

    const promiseUK = new Promise((resolve) => {
      setTimeout(resolve, 100, ukSuccess);
    });

    const promiseFR = new Promise((resolve) => {
      setTimeout(resolve, 200, frSuccess);
    });

    const result = await loadBalancer(promiseUK, promiseFR);
    expect(result).toBe(ukSuccess);
  });

  it('should return the value of the first resolved promise even if the second promise resolves faster', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';

    const promiseUKSlow = new Promise((resolve) => {
      setTimeout(resolve, 400, ukSuccess);
    });

    const promiseFR = new Promise((resolve) => {
      setTimeout(resolve, 200, frSuccess);
    });

    const result = await loadBalancer(promiseUKSlow, promiseFR);
    expect(result).toBe(frSuccess);
  });

  it('should handle rejected promises and still return the value of the first resolved promise', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frError = 'Downloading from FR failed';

    const promiseUK = new Promise((resolve) => {
      setTimeout(resolve, 100, ukSuccess);
    });

    const promiseFR = new Promise((resolve, reject) => {
      setTimeout(reject, 200, new Error(frError));
    });

    const result = await loadBalancer(promiseUK, promiseFR);
    expect(result).toBe(ukSuccess);
  });
});
