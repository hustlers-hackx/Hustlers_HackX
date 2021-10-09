require('dotenv').config();
const jwtSecret = process.env.SECRET_KEY

const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/User')

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : jwtSecret
}

passport.use(
    'local',
    new JWTStrategy(jwtOptions,(jwt_payload,done) => {
        try{
            User.findOne({email : jwt_payload.id})
            .select('-hashed_password')
            .then(user => {
                if(user){
                    done(null,user)
                }else{
                    done(null,false)
                }
            })
        }
        catch(err){
            done(err)
        }
    })
)

module.exports = passport