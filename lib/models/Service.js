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

module.exports = Service;