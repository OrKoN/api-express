const { QueryParameter } = require('../..');

test('creates an empty QueryParameter', () => {
  new QueryParameter(
    {
      type: 'string',
      name: 'test',
    },
    [],
  );
});
