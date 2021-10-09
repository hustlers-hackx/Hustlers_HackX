const User = require('../models/User')
const Image = require('../models/Image')
const getError = require('../utils/dbErrorHandler')
const {userPopulate,hackathonPopulate} = require('../utils/populateObjects')
const { safeUser } = require('../utils/safeObject')
const Hackathon = require('../models/Hackathon')

module.exports = {

    updateUser : async (req,res) => {
        if(!req.params.id){
            return res.status(400).json({
                err: true,
                message: "Id not specified."
            })
        }
        try{   
            let user = await User.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body
                },
                {new : true})
                .populate(userPopulate)
            if(!user){
                return res.status(400).json({
                    err: true,
                    message: "No such user exists."
                })
            }
            if(req.body.image){
                const image = new Image()
                let response = await image.upload(user._id,req.body.image,'User')
                if(response){
                    user.image = response
                    await image.save()
                }
            }
            await user.save()
            return res.status(200).json({
                err: false,
                message: "User updated successfully.",
                data : safeUser(user)
            })
        }catch(error){
            console.log(error)
            return res.status(400).json({
                err: true,
                message: getError(error)
            })  
        }
    },

    addHackathon : async (req,res) => {
        if(!req.params.id){
            return res.status(400).json({
                err: true,
                message: "Id not specified."
            })
        }
        try{   
            let user = await User
                .findById(req.params.id)
                .populate(userPopulate)
            let hackathon = await Hackathon
                .findById(req.params.hackathonId)
                .populate(hackathonPopulate)
            if(!user._doc){
                return res.status(400).json({
                    err: true,
                    message: "No such user exists."
                })
            }
            if(!hackathon._doc){
                return res.status(400).json({
                    err: true,
                    message: "No such hackathon exists."
                })
            }
            user.addHackathon(req.params.hackathonId,req.query.participating)
            hackathon.incrementCount()
            if(req.query.participating){
                hackathon.addParticipant(user._id)
            }
            await user.save()
            await hackathon.save()
            return res.status(200).json({
                err: false,
                message: "Hackathon added successfully.",
                data : safeUser(user)
            })
        }catch(error){
            console.log(error)
            return res.status(400).json({
                err: true,
                message: getError(error)
            })  
        }
    },

    addFriend : async (req,res) => {
        if(!req.params.id){
            return res.status(400).json({
                err: true,
                message: "Id not specified."
            })
        }
        try{   
            let user = await User
                .findById(req.params.id)
                .populate(userPopulate)
            let friend = User
                .findById(req.params.friendId)
                .populate(userPopulate)
            if(!user._doc || !friend._doc){
                return res.status(400).json({
                    err: true,
                    message: "No such user exists."
                })
            }
            user.addFriend(friend._id)
            friend.addFriend(user._id)
            await user.save()
            await friend.save()
            return res.status(200).json({
                err: false,
                message: "Friend added successfully.",
                data : safeUser(user)
            })
        }catch(error){
            console.log(error)
            return res.status(400).json({
                err: true,
                message: getError(error)
            })  
        }
    }

}