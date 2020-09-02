const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: { 
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    },
    address: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    }
}, { versionKey: false });

module.exports = mongoose.model('Orders', OrderSchema);