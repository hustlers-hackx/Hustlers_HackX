const express = require('express')
const passport= require('../config/passport.config')

const router = express.Router()

const hackathonCtrl = require('../controllers/hackathon.controller')
const { authenticate } = require('../middleware/authUser')

router.route("/")
.get(
    hackathonCtrl.getHackathons
)
.post(
    authenticate,
    hackathonCtrl.createHackathon
)

router.route("/:id")
.get(
    authenticate,
    hackathonCtrl.getHackathonbyId
)
.patch(
    authenticate,
    hackathonCtrl.updateHackathon
)

module.exports = router