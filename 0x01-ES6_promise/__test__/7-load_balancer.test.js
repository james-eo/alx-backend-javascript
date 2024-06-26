import loadBalancer from '../7-load_balancer.js';

test('loadBalancer resolves the first promise', async () => {
  const ukSuccess = 'Downloading from UK is faster';
  const frSuccess = 'Downloading from FR is faster';

  const promiseUK = new Promise((resolve) => setTimeout(resolve, 100, ukSuccess));
  const promiseFR = new Promise((resolve) => setTimeout(resolve, 200, frSuccess));

  const result = await loadBalancer(promiseUK, promiseFR);
  expect(result).toBe(ukSuccess);
});

test('loadBalancer resolves the first promise (slower UK)', async () => {
  const ukSuccess = 'Downloading from UK is faster';
  const frSuccess = 'Downloading from FR is faster';

  const promiseUKSlow = new Promise((resolve) => setTimeout(resolve, 400, ukSuccess));
  const promiseFR = new Promise((resolve) => setTimeout(resolve, 200, frSuccess));

  const result = await loadBalancer(promiseUKSlow, promiseFR);
  expect(result).toBe(frSuccess);
});
