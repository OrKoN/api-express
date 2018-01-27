const { Response } = require('../..');

test('creates an empty Response', () => {
  new Response(
    {
      schema: {},
    },
    [],
  );
});
