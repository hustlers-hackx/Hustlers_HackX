const jwt = require('jsonwebtoken')
const User = require('../models/User')
const jwtSecret = process.env.SECRET_KEY

function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}

module.exports = {

    authenticate : async(req,res,next) => {
        const token = extractToken(req)
        if(!token){
            res.status(403).send("Access denied.")
        }
        try{
            const decoded = jwt.verify(token, jwtSecret);
            User.findOne({email : decoded.id})
            .select('-hashed_password')
            .then(user => {
                if(user){
                    req.user = user
                    next()
                }else{
                    res.status(401).send("Invalid token")
                }
            })
        }
        catch(err){
            console.log(err)
            res.status(401).send("Invalid token")
        }
    }

}