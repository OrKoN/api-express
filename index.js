function h(type, attributes, ...children) {
  return new type(attributes, children);
}

class Service {
  constructor(attributes, children) {
    this.port = attributes.port;
    this.id = attributes.id;
    this.groups = children.filter(c => c instanceof Group);
    this.middleware = children.filter(c => c instanceof Middleware);
  }

  getMiddleware() {
    return this.middleware;
  }

  getGroups() {
    return this.groups;
  }

  getPort() {
    return this.port;
  }

  getId(){
    return this.id;
  }
}

class Middleware {
  constructor(attributes, children) {
    if (!attributes.use) {
      throw new Error('.use is required on Middleware');
    }
    if (children.length > 0) {
      throw new Error('Middleware must have no children');
    }
    this.use = attributes.use;
  }

  getUse() {
    return this.use;
  }
}

class Group {
  constructor(attributes, children) {
    this.name = attributes.name;
    this.description = attributes.description;
    this.routes = children;
  }

  getRoutes() {
    return this.routes;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }
}

class Route {
  constructor(attributes, children) {
    this.path = attributes.path || new Error('.path is required for Route');
    this.handler = attributes.handler || new Error('.handler is required on the route');
    this.method = attributes.method || new Error('.method is required on the route');
    this.request = children.find(c => c instanceof Request);
    this.response = children.find(c => c instanceof Response);
    this.middleware = children.filter(c => c instanceof Middleware);
    
    if (!this.request) throw new Error('Request is required on the route');
    if (!this.response) throw new Error('Response is required on the route');
  }

  getHandler() {
    return this.handler;
  }

  getPath() {
    return this.path;
  }

  getMethod() {
    return this.method;
  }
}

class Request {
  constructor(attributes, children) {
    this.parameters = children;
  }
}

class Response {
  constructor(attributes, children) {
    if (!attributes.schema) {
      throw new Error('.schema is required on Response');
    }
    this.schema = attributes.schema;
  }
}

class PathParameter {
  constructor(attributes, children) {
    if (!attributes.type) {
      throw new Error('.type is required on QueryParameter');
    }
    if (!attributes.name) {
      throw new Error('.name is required on QueryParameter');
    }
    if (children.length > 0) {
      throw new Error('Handler must have no children');
    }
    this.type = attributes.type;
    this.name = attributes.name;
  }
}

class QueryParameter {
  constructor(attributes, children) {
    if (!attributes.type) {
      throw new Error('.type is required on QueryParameter');
    }
    if (!attributes.name) {
      throw new Error('.name is required on QueryParameter');
    }
    if (children.length > 0) {
      throw new Error('Handler must have no children');
    }
    this.type = attributes.type;
    this.name = attributes.name;
  }
}

const express = require('express');

function run(service, cb) {
  const app = express();

  service.getMiddleware().forEach(m => {
    app.use(m.getUse());
  });

  service.getGroups().forEach(g => {
    g.getRoutes().forEach(r => {
      app[r.getMethod()](r.getPath(), r.getHandler());
    });
  });

  app.listen(3000, cb);
}

function doc(service, cb) {
  let docs = `FORMAT: 1A

# ${service.getId()}\n\n`;

  service.getGroups().forEach(g => {
    docs += `# Group ${g.getName()}\n${g.getDescription()}\n\n`;
    g.getRoutes().forEach(r => {
      docs += `# ${r.getMethod().toUpperCase()} ${r.getPath()}\n`;
      docs += `+ Response 200 (text/plain)\n`;
    });
  });

  cb(null, docs);
}

module.exports = {
  h,
  run,
  doc,
  Service,
  Middleware,
  Group,
  Route,
  Request,
  Response,
  PathParameter,
  QueryParameter,
};