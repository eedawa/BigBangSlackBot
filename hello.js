module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Wow, fantastic baby!'
  };
  if (userName != "BigBang"){
    return res.status(200).json(botPayload);
  };
}
