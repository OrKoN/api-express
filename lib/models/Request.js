const Element = require('./Element');

class Request extends Element {
  constructor(attributes, children) {
    super(attributes, children);
    this.parameters = children;
  }

  getParameters() {
    return this.parameters;
  }
}

module.exports = Request;
