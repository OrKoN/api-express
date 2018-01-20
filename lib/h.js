module.exports = function h(type, attributes, ...children) {
  return new type(attributes, children);
};
