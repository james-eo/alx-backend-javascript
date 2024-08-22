# 0x06. Unittests in JS

## UnitTests

This project involves writing unit tests for JavaScript code using various tools and libraries including Mocha, Chai, and Sinon. It covers topics such as basic unit testing, assertion libraries, spies, stubs, hooks, and integration testing.

## Resources

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.example.com) *(replace with actual URL)*

## Learning Objectives

By the end of this project, you should be able to:

- Use Mocha to write a test suite
- Utilize different assertion libraries (Node or Chai)
- Present long test suites effectively
- Use spies and stubs appropriately
- Understand and use hooks in testing
- Write unit tests for async functions
- Perform integration testing with a small Node server

## Tasks

### 0. Basic Test with Mocha and Node Assertion Library

- **Install Mocha** using npm.
- **Set up a script** in `package.json` to run Mocha with `npm test`.
- **Create a file** named `0-calcul.js` with a `calculateNumber` function.
- **Create test cases** in `0-calcul.test.js`.

**Example Output:**
```javascript
const calculateNumber = require("./0-calcul.js");
console.log(calculateNumber(1, 3)); // 4
console.log(calculateNumber(1, 3.7)); // 5
console.log(calculateNumber(1.2, 3.7)); // 5
console.log(calculateNumber(1.5, 3.7)); // 6

