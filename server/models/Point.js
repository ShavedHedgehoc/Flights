const { Schema, model } = require('mongoose')

const Point = new Schema({
    name: { type: String, required: true, unique: true },
    plant: { type: Schema.Types.ObjectId, ref: 'Plant', required: true },
    banned: { type: Boolean, required: true, default: false },
})

module.exports = model('Point', Point)
