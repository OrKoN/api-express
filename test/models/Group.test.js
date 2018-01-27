const { Group } = require('../..');

test('creates an empty Group', () => {
  new Group({}, []);
});
