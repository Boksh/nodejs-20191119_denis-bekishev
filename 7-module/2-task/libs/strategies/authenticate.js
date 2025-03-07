const User = require('../../models/User');

const authenticate = async (strategy, email, displayName, done) => {
  if (!email) return done(null, false, 'Не указан email');

  let user = await User.findOne({email});
  if (!user) {
    try {
      user = await User.create({email, displayName});
    } catch (err) {
      return done(err);
    }
  }
  return done(null, user);
};
module.exports = authenticate;
