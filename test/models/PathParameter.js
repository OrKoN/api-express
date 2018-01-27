const { PathParameter } = require('../..');

test('creates an empty PathParameter', () => {
  new PathParameter({}, []);
});
