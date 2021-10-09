const express = require('express')
const passport= require('../config/passport.config')

const router = express.Router()

const hackathonCtrl = require('../controllers/hackathon.controller')

router.route("/")
.get(
    hackathonCtrl.getHackathons
)
.post(
    hackathonCtrl.createHackathon
)

router.route("/:id")
.get(
    hackathonCtrl.getHackathonbyId
)
.patch(
    hackathonCtrl.updateHackathon
)

module.exports = router