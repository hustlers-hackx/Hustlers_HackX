const User = require('../models/User')
const getError = require('../utils/dbErrorHandler')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.SECRET_KEY
const { getGithubEmailfromCode } = require('../utils/githubClient')
const { safeUser } = require('../utils/safeObject')

const clientURL = process.env.FRONTEND_URI

const registerUser = async (req,res) => {
    const temp_user = new User(req.body)
    try{
        await temp_user.save()
        return res.status(200).json({
            err: false,
            message: "Successfully signed up!"
        })
    }
    catch(error){
        return res.status(400).json({
            err: true,
            message: getError(error)
        })
    }
}

const loginUser = async (req,res) => {
    try{
        User.findOne({user : req.body.user})
        .then(user => {
            if(user){
                if(!user.authenticate(req.body.password)){
                    res.status(400).json({
                        err: true,
                        message : "Password does not match"
                    })
                }else{
                    const token = jwt.sign({id : user.email},jwtSecret)
                    return res.status(200).json({
                        auth : true,
                        token : token,
                        data : safeUser(user),
                        expires : new Date(new Date().getTime() + 2628000000),
                        msg: "Successfully logged in!"
                    })
                }
            }else{
                res.status(400).json({
                    err: true,
                    message : "User Doesn't Exist"
                })
            }
        })
    }
    catch(err){
        return res.status(400).json({
            error : "Could not Login"
        })
    }
}

const githubSigninUrl = async(req,res) => {
    let url = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}`
    res.redirect(url)
}

const githubSigninVerify = async (req,res) => {
    try{
        let email = await getGithubEmailfromCode(req.query.code)
        User.findOne({email : email})
        .then(user => {
            if(user){
                const token = jwt.sign({id : user.user},jwtSecret)
                let url = `${process.env.FRONTEND_URI}/#/?token=${encodeURIComponent(token)}&user=${encodeURIComponent(user.user)}`
                return  res.redirect(url)
            }else{
                let url = `${process.env.FRONTEND_URI}/#/?error=${encodeURIComponent('User doesnt exist')}`
                return  res.redirect(url)
            }
        })
    }
    catch(err){
        let url = `${process.env.FRONTEND_URI}/#/?error=${encodeURIComponent('Could not login')}`
        return  res.redirect(url)
    }
}

module.exports = {githubSigninVerify,githubSigninUrl,registerUser,loginUser}