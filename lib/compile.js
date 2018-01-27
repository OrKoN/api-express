const babel = require('babel-core');
const fs = require('fs');

module.exports = function compile(filename) {
  const result = babel.transformFileSync(filename, {
    babelrc: false,
    ast: false,
    plugins: [
      [
        'transform-react-jsx',
        {
          pragma: 'ApiExpress.h',
        },
      ],
      'transform-es2015-modules-commonjs',
    ],
  });
  fs.writeFileSync(filename.replace('.jsx', '.js'), result.code, 'utf-8');
  const module = require(filename.replace('.jsx', '.js')).default();
  fs.unlinkSync(filename.replace('.jsx', '.js'));
  return module;
};
