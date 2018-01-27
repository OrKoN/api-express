const Group = require('./Group');
const Middleware = require('./Middleware');
const Element = require('./Element');

class Service extends Element {
  constructor(attributes, children) {
    super(attributes, children);
    this.port = attributes.port;
    this.id = attributes.id;
    this.version = attributes.version;
    this.contact = attributes.contact;
    this.tags = attributes.tags;
    this.endpoint = attributes.endpoint;
    this.groups = children.filter(c => c instanceof Group);
    this.middleware = children.filter(c => c instanceof Middleware);
  }

  getId() {
    return this.id;
  }

  getPort() {
    return this.port;
  }

  getMiddleware() {
    return this.middleware;
  }

  getGroups() {
    return this.groups;
  }

  getContact() {
    return this.contact;
  }

  getVersion() {
    return this.version;
  }

  getTags() {
    return this.tags;
  }

  getEndpoint() {
    return this.endpoint;
  }
}

module.exports = Service;
