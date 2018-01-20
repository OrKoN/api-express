const express = require('express');

function getApp(service) {
  const app = express();

  service.getMiddleware().forEach(m => {
    app.use(m.getUse());
  });

  service.getGroups().forEach(g => {
    g.getRoutes().forEach(r => {
      app[r.getMethod()](r.getPath(), r.getHandler());
    });
  });

  return app;
}

module.exports = getApp;
