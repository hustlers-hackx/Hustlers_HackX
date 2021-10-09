const mongoose = require('mongoose');

const HackathonSchema = mongoose.Schema({
    name : {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Image'
    },
    description : {
        type: String,
        trim: true,
        required: true
    },
    participantCount : {
        type: Number,
        default: 0
    },
    start_date: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        trim: true,
        required: true
    },
    url:{
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, 'URL is invalid'],
        trim: true,
        required: "URL is required."
    },
    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],

})

HackathonSchema.methods = {
    incrementCount : function(){
        this.participantCount++
    },
    addParticipant : function(participant){
        this.participants.push(participant)
    }
}

module.exports = mongoose.model('Hackathon',HackathonSchema)