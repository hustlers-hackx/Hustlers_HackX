const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = Number(process.env.SALT_ROUNDS)

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : "Name is required."
    },
    bio :{
        type: String,
        default : ""
    },
    image: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Image'
    },
    email : {
        type : String,
        required : "Email is required",
        trim: true,
        unique: 'Email already exists',
        match: [/.+@.+\..+/, 'Email is invalid']
    },
    hashed_password : { 
        type : String,
        required: "Password is required",
    },
    admin : {
        type: Boolean,
        default: false
    },
    skills: [
        {
            type : String,
            trim: true
        }
    ],
    phone:{
        type: String,
        trim: true,
        match: [/^[0-9]{10}$/,"Contact Number is invalid."],
        default : ""
    },
    githubUserName:{
        type: String,
        match: [/[-a-zA-Z0-9()@:%_+.~#?&//=]*/, 'Github Username is invalid.'],
        trim: true,
        default : ""
    },
    hackathons : [
        {
            hackathonId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Hackathon'
            },
            participating : {
                type: Boolean,
                default: false
            }
        }
    ],
    friends: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }   
});

UserSchema.path('hashed_password').validate(function(){
    if(this._password && this._password.length < 8){
        this.invalidate('password', 'Password must be at least 8 characters.')
    }
    if(!this._password && this.isNew){
        this.invalidate('password', 'Password is required.')
    }
},null)

UserSchema.virtual('password')
.set(function(pass){
    this._password = pass
    this.hashed_password = this.encryptPassword(pass)
})
.get(function(){
    return this._password
})

UserSchema.methods = {
    authenticate : function(pass){
        return bcrypt.compareSync(pass, this.hashed_password)
    },
    encryptPassword : function(pass){
        return bcrypt.hashSync(pass, saltRounds)
    },
    addSkills : function(skills){
        this.skills.push(...skills)
    },
    addFriend : function(id){
        this.friends.push(id)
    },
    removeFriend : function(id){
        this.friends = this.friends.filter(e => e._id.toString() !== id.toString())
    },
    hasHackathon : function(hackathon){
        return this.hackathons.findIndex(e => e.hackathonId._id.toString() === hackathon)
    },
    addHackathon : function(hackathon,participating=false){
        let index = this.hasHackathon(hackathon)
        if(index === -1){
            this.hackathons.push({
                hackathonId : hackathon,
                participating : participating || false
            })
        }else{
            this.hackathons[index].participating = participating
        }
    }, 
    removeHackathon : function(id){
        let out
        this.hackathons = this.hackathons.filter(e => {
            if(e.hackathonId._id.toString() !== id){
                return true
            }else{
                out = e
                return false
            }
        })
        return out
    }
}

module.exports = mongoose.model('User',UserSchema)