const Hackathon = require('../models/Hackathon')
const Image = require('../models/Image')
const getError = require('../utils/dbErrorHandler')
const {hackathonsPopulate,hackathonPopulate} = require('../utils/populateObjects')

module.exports = {

    createHackathon : async(req,res) => {
        let hackathon = new Hackathon({
            name : req.body.name,
            description : req.body.description,
            url : req.body.url,
            start_date : req.body.date,
            duration : req.body.duration
        })
        if(req.body.image){
            const image = new Image()
            let response = await image.upload(hackathon._id,req.body.image,'Hackathon')
            if(response){
                hackathon.image = response
                await image.save()
            }
        }
        try{
            await hackathon.save()
            return res.status(201).json({
                err: false,
                message: "Hackathon created successfully.",
                data : await Hackathon.populate(hackathon,hackathonPopulate)
            })
        }catch(error){
            console.log(error)
            return res.status(400).json({
                err: true,
                message: getError(error)
            })
        }
    },

    updateHackathon : async(req,res) => {
        if(!req.params.id){
            return res.status(400).json({
                err: true,
                message: "Id not specified."
            })
        }
        try{
            let hackathon = await Hackathon.findByIdAndUpdate(
                req.params.id, 
                {
                    ...req.body
                }, 
                {new : true}
            )
            if(!hackathon){
                return res.status(400).json({
                    err: true,
                    message: "No such hackathon exists."
                })
            }
            await hackathon.save()
            return res.status(200).json({
                err: false,
                message: "Hackathon updated successfully.",
                data : await Hackathon.populate(hackathon,hackathonPopulate)
            })
        }catch(error){
            console.log(error)
            return res.status(400).json({
                err: true,
                message: getError(error)
            })
        }
    },

    getHackathonbyId : async(req,res) => {
        if(!req.params.id){
            return res.status(400).json({
                err: true,
                message: "Id not specified."
            })
        }
        try{
            let hackathon = await Hackathon
                .findById(req.params.id)
                .populate(hackathonPopulate)
            if(!hackathon){
                return res.status(400).json({
                    err: true,
                    message: "No such hackathon exists."
                })
            }
            return res.status(200).json({
                err: false,
                data : [hackathon]
            })
        }catch(error){
            console.log(error)
            return res.status(400).json({
                err: true,
                message: getError(error)
            })
        }
    },

    getHackathons : async(req,res) => {
        try{
            let hackathons = await Hackathon
                .find({})
                .populate(hackathonsPopulate)
            if(!hackathons){
                return res.status(400).json({
                    err: true,
                    message: "No hackathons found."
                })
            }
            return res.status(200).json({
                err: false,
                data : hackathons
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