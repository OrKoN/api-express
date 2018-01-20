const Request = require('./Request');
const Response = require('./Response');
const Middleware = require('./Middleware');

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

module.exports = Route;