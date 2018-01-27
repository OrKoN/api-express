const _ = require('lodash');

class Element {
  constructor(attributes, children) {
    if (!_.isPlainObject(attributes)) {
      throw new Error('Element attributes must be a plain object');
    }
    if (!_.isArray(children)) {
      throw new Error('Element children must be an array');
    }
  }
}

module.exports = Element;
