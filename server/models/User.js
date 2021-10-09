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
        required: "Bio is required."
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
    skills: [String],
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
    addHackathon : function(hackathon,participating){
        this.hackathons.push({
            hackathonId : hackathon,
            participating
        })
    }   
}

module.exports = mongoose.model('User',UserSchema)