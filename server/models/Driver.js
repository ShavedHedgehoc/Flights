const { Schema, model } = require('mongoose')

const Driver = new Schema({
    name: { type: String, required: true, unique: true },
    banned: { type: Boolean, required: true, default: false },
})

module.exports = model('Driver', Driver)
