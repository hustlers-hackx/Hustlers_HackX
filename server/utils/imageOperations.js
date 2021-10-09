const cloudinary = require('../config/cloudinary.config')

module.exports = {

    deleteImage : async(id) => {
        return cloudinary.uploader.destroy(id)
    },

    uploadImage : async(image,type) => {
        return cloudinary.uploader.upload(image,{ folder: `${type}/` })
    },

}