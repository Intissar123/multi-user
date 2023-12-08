const UserModel = require("../models/users.model");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;

module.exports = (passport) => {
   passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      UserModel.findOne({ _id: jwt_payload.id })
  .then(user => {
    if (user) {
      return done(null, user);
    } else {
      // Handle user not found case
      // ...
    }
  })
  .catch(err => done(err, false));
    })
  );
};
