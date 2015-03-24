module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Fantastic, baby! BOOMSHAKALAKA'
  };
  if (userName !== "Big Bang Bot"){
    return res.status(200).json(botPayload);
  };
}
