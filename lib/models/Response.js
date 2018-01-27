const Element = require('./Element');

class Response extends Element {
  constructor(attributes, children) {
    super(attributes, children);
    this.schema = attributes.schema;
  }

  getSchema() {
    return this.schema;
  }
}

module.exports = Response;
