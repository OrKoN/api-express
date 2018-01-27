const { h } = require('..');

test('creates new element', () => {
  class Test {
    constructor(attrs, children) {
      this.attrs = attrs;
      this.children = children;
    }
  }
  const result = h(Test, { test: 'test' }, 'test');
  expect(result).toBeInstanceOf(Test);
  expect(result).toEqual({
    attrs: {
      test: 'test',
    },
    children: ['test'],
  });
});
