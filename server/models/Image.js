const mongoose = require('mongoose');
const {uploadImage, deleteImage} = require('../utils/imageOperations')

const ImageSchema = mongoose.Schema({
    public_id : {
        type : String,
        trim : true,
        unique : true,
        required : true
    },
    url : {
        type : String,
        trim : true,
        required : true,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, 'URL is invalid']
    },
    parent_id : {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
    },
    parent_model : {
        type : String,
        required : true
    }
})

ImageSchema.methods = {
    upload: async function(id,image,type){
        this.parent_id = id
        this.parent_model = type
        let self = this
        return uploadImage(image,type)
        .then(({url,public_id}) => {
            self.url = url,
            self.public_id = public_id
            return self._id
        })
        .catch(() => false)
    }
}

module.exports = mongoose.model("Image",ImageSchema)