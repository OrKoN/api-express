const Request = require('./Request');
const Response = require('./Response');
const Middleware = require('./Middleware');
const Element = require('./Element');

class Route extends Element {
  constructor(attributes, children) {
    super(attributes, children);
    this.path = attributes.path;
    this.handler = attributes.handler;
    this.method = attributes.method;
    this.description = attributes.description;
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

  getResponse() {
    return this.response;
  }

  getRequest() {
    return this.request;
  }

  getDescription() {
    return this.description;
  }
}

module.exports = Route;
