const { Route } = require('../..');
const { Request } = require('../..');
const { Response } = require('../..');

test('creates an empty Route', () => {
  new Route({}, [
    new Request({}, []),
    new Response(
      {
        schema: {},
      },
      [],
    ),
  ]);
});
