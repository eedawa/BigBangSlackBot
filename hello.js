module.exports = function (req, res, next) {
  var botPayload = {
    var userName = req.body.user_name;
    text : 'Wow, fantastic baby!'
  };
  if (userName !== "bigbangslackbot"){
    return res.status(200).json(botPayload);
  };
}
