const passport = require('passport');
const { JWT_SECRET } = require('../Middleware/jwtAuthMiddleware');
const JwtStratergy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt; // this helps to extract the token from request headers (bearer token)


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}


// jwt.verify is done inside this stratergy
const stratergy = new JwtStratergy(options, (payload, done) => {
    console.log("Payload received in passport stratergy: ", payload);

    try {
        // good case 
        // we can do additional check, if user is good or bad
        return done(null, payload);
    } catch(error) {
        return done(error, false);
    }
});

module.exports = (passport) => {
    passport.use(stratergy);
}