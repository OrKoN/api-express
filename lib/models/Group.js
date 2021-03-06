const Element = require('./Element');

class Group extends Element {
  constructor(attributes, children) {
    super(attributes, children);
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

module.exports = Group;
