const { Schema, model } = require('mongoose')

const Flight = new Schema(
    {
        driverId: {
            type: Schema.Types.ObjectId,
            ref: 'Driver',
            required: true,
        },
        arrivalId: { type: Schema.Types.ObjectId, ref: 'Point' },
        departureId: { type: Schema.Types.ObjectId, ref: 'Point' },
        arrivalTime: { type: Date },
        departureTime: { type: Date },
        flightType: { type: String },
        loadingStartTime: { type: Date },
        loadingEndTime: { type: Date },
        unloadingStartTime: { type: Date },
        unloadingEndTime: { type: Date },
        awayTime: { type: Date },
        beginAttr: { type: Boolean, required: true, default: false },
        endAttr: { type: Boolean, required: true, default: false },
        creatorId: { type: Schema.Types.ObjectId, ref: 'User' },
        currentState: { type: String, require: true },
        activeAttr: { type: Boolean, required: true, default: true },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
)

module.exports = model('Flight', Flight)
