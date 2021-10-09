const express = require('express')
const passport= require('../config/passport.config')

const router = express.Router()

const userCtrl = require('../controllers/user.controller')

router.route("/:id")
.patch(
    userCtrl.updateUser
)

router.route("/:id/friends/:friendId")
.post(
    userCtrl.addFriend
)

router.route("/:id/hackathons/:hackathonId")
.post(
    userCtrl.addHackathon
)

module.exports = router