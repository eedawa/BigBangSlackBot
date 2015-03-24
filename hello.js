module.exports = function (req, res, next) {
  var botPayload = {
    text : 'Wow, fantastic baby!'
  };
  if (req.body.user_name !== "bigbangslackbot"){
    return res.status(200).json(botPayload);
  };
}
