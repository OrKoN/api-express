const { Middleware } = require('../..');

test('creates an empty Middleware', () => {
  new Middleware(
    {
      use: () => console.log('test'),
    },
    [],
  );
});
