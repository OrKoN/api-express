const { Request } = require('../..');

test('creates an empty Request', () => {
  new Request({}, []);
});