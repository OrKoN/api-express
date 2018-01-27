const { compile } = require('../..');
const apiBlueprint = require('../../doc-generators/api-blueprint');
const fs = require('fs');

apiBlueprint(compile(__dirname + '/definition.jsx'), (err, doc) => {
  fs.writeFileSync('./api.md', doc, 'utf-8');
});
