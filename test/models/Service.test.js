const { Service } = require('../..');

test('creates an empty Service', () => {
  new Service({}, []);
});
