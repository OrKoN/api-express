const { doc } = require('.');
const serverDef = require('./definition').default;
doc(serverDef(), (err, docs) => {
  require('fs').writeFileSync('./api.doc', docs, 'utf-8');
});