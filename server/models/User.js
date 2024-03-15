const { Schema, model } = require('mongoose')

const User = new Schema({
    // name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    banned: { type: Boolean, required: true, default: false },
})

module.exports = model('User', User)
