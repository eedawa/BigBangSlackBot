module.exports = function (req, res, next) {
  var botPayload = {
    text : 'Wow, fantastic baby!'
  };
  if(userName !== "bigbangslackbot"){
    return res.status(200).json(botPayload);
  };
}
