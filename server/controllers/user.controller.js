const User = require('../models/User')
const Image = require('../models/Image')
const getError = require('../utils/dbErrorHandler')
const {userPopulate,hackathonPopulate} = require('../utils/populateObjects')
const { safeUser } = require('../utils/safeObject')
const Hackathon = require('../models/Hackathon')

module.exports = {

    getUser : async(req,res) => {
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
            if(!user._doc){
                return res.status(400).json({
                    err: true,
                    message: "No such user exists."
                })
            }
            return res.status(200).json({
                err: false,
                data : safeUser(user)
            })
        }catch{
            return res.status(400).json({
                err: true,
                message: "Could not get user."
            }) 
        }
    },

    updateUser : async (req,res) => {
        if(!req.params.id){
            return res.status(400).json({
                err: true,
                message: "Id not specified."
            })
        }
        try{   
            let requestImage = req.body.image
            delete req.body.image
            let user = await User.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body
                },
                {new : true})
            if(!user){
                return res.status(400).json({
                    err: true,
                    message: "No such user exists."
                })
            }
            if(requestImage){
                console.log(user.image)
                if(user.image){
                    let existingImage = await Image.findById(user.image)
                    if(existingImage){
                        await existingImage.deleteOne()
                    }
                }
                const image = new Image()
                let response = await image.upload(user._id,requestImage,'User')
                if(response){
                    user.image = response
                    await image.save()
                }
            }
            await User.populate(user, userPopulate)
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
            user.addHackathon(req.params.hackathonId,req.body.participating)
            if(user.hasHackathon(req.params.hackathonId) === -1){
                hackathon.incrementCount()
            }
            if(req.body.participating === true){
                hackathon.addParticipant(user._id)
            }else if(req.body.participating === false){
                hackathon.removeParticipant(user._id)
            }
            await user.save()
            await hackathon.save()
            await User.populate(user, userPopulate)
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
            let friend = await User
                .findById(req.params.friendId)
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
            await User.populate(user, userPopulate)
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
    },

    removeHackathon : async(req,res) => {
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
            let deletedItem = user.removeHackathon(req.params.hackathonId)
            hackathon.decrementCount()
            if(deletedItem.participating){
                hackathon.removeParticipant(user._id)
            }
            await user.save()
            await hackathon.save()
            await User.populate(user, userPopulate)
            return res.status(200).json({
                err: false,
                message: "Hackathon deleted successfully.",
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

    removeFriend : async(req,res) => {
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
            let friend = await User
                .findById(req.params.friendId)
                .populate(userPopulate)
            if(!user._doc || !friend._doc){
                return res.status(400).json({
                    err: true,
                    message: "No such user exists."
                })
            }
            user.removeFriend(friend._id)
            friend.removeFriend(user._id)
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