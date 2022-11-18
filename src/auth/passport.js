const passport = require("passport")
const passportJWT = require("passport-jwt");
const User = require("../models/model");
const ExtractJwt = passportJWT.ExtractJwt
const strategyJwt = passportJWT.Strategy;

passport.use(new strategyJwt({jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey : "90b9e775b73d5a57490c4ec92ce16e6bbdbac2110b1cb6a7bcbec2a8d857798d742b073c208d839b66a9c3b77ccceaa1e0dc641ce13879dd21ee4233398c604f"}, 
async(jwtPayload ,done) => {
    return User.findOne({
        where : {
           email : jwtPayload.email
        }
    }).then((user) => {
        return done(null, user);
    }).catch((err) => {
        return done(err)
    })
}))