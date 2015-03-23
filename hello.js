module.exports = function (req, res, next) {
  var botPayload = {
    text : 'Hello, ' + userName + '!'
  };

  return res.status(200).json(botPayload);
}
