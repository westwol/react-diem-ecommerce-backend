const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    image_url: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
}, { versionKey: false });

ProductsSchema.index({ 
    name: 'text' 
});

module.exports = mongoose.model('Product', ProductsSchema);