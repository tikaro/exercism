var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  if ( typeof(who) == 'undefined') {who = 'you'}
  return `One for ${who}, one for me.`;
};

module.exports = TwoFer;