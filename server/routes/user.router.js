const express = require('express')
const passport= require('../config/passport.config')

const router = express.Router()

const userCtrl = require('../controllers/user.controller')
const { authenticate } = require('../middleware/authUser')

router.route("/:id")
.patch(
    authenticate,
    userCtrl.updateUser
)

router.route("/:id/friends/:friendId")
.post(
    authenticate,
    userCtrl.addFriend
)

router.route("/:id/hackathons/:hackathonId")
.post(
    authenticate,
    userCtrl.addHackathon
)

module.exports = router