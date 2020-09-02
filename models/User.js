const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true,
        trim: true
    },
    last_name: { 
        type: String,
        required: true,
        trim: true
    },
    email: { 
        type: String,
        required: true,
        trim: true,
        unique: true 
    },
    password: { 
        type: String,
        required: true,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema);