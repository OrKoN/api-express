module.exports = function(req, res) {
  console.log('getHello', req.params.who);
  res.status(200).json({
    message: `Hello ${req.params.who}!`,
  });
};
