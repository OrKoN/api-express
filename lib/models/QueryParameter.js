const Element = require('./Element');

class QueryParameter extends Element {
  constructor(attributes, children) {
    super(attributes, children);
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

module.exports = QueryParameter;
