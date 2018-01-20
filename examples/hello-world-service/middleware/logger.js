module.exports = function(req, res, next) {
  console.log('incoming request', req.url);
  next();
};
