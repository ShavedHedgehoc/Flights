const { Schema, model } = require('mongoose')

const State = new Schema({
    name: { type: String, required: true, unique: true },
    banned: { type: Boolean, required: true, default: false },
})

module.exports = model('State', State)
