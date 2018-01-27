const { compile } = require('../..');
const getExpressServer = require('../../servers/express');
const server = getExpressServer(compile(__dirname + '/definition.jsx'));

server.listen(3000, () => {
  console.log('server started');
});
