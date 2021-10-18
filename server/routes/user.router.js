const express = require('express')
const passport= require('../config/passport.config')

const router = express.Router()

const userCtrl = require('../controllers/user.controller')
const { authenticate } = require('../middleware/authUser')

router.route("/:id")
.get(
    userCtrl.getUser
)
.patch(
    authenticate,
    userCtrl.updateUser
)

router.route("/:id/friends/:friendId")
.post(
    userCtrl.addFriend
)
.delete(
    userCtrl.removeFriend
)

router.route("/:id/hackathons/:hackathonId")
.post(
    userCtrl.addHackathon
)
.delete(
    userCtrl.removeHackathon
)

module.exports = router