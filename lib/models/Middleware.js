const Element = require('./Element');

class Middleware extends Element {
  constructor(attributes, children) {
    super(attributes, children);
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

module.exports = Middleware;
