module.exports = {

    safeUser : (user) => {
        let data = Object.assign({},user._doc || user)
        delete data["hashed_password"]
        return data
    }

}