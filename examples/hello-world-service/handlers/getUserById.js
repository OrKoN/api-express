module.exports = function(req, res) {
  console.log('getUserById', req.params.id);
  res.status(200).json({
    id: req.params.id,
  });
};
