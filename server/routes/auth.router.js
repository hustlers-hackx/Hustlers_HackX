const express = require('express')

const router = express.Router()

const authCtrl = require('../controller/auth.controller')

router.post('/register',authCtrl.registerUser)

router.post('/login',authCtrl.loginUser)

router.get('/githubSigninURL',authCtrl.githubSigninUrl)

router.get('/githubCallback',authCtrl.githubSigninVerify)

module.exports = router