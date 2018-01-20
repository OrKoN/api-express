class Response {
  constructor(attributes, children) {
    if (!attributes.schema) {
      throw new Error('.schema is required on Response');
    }
    this.schema = attributes.schema;
  }
}

module.exports = Response;