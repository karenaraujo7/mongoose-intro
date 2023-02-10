const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name: {type: String, trim: true},
    email: {type: String, unique: true, trim: true},
    passwordHash: {type: String, required: true}
})

module.exports = mongoose.model("User", UserSchema)