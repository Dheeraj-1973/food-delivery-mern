const mongoose = require('mongoose');

// A Mongoose Schema defines the structure of the document,
// default values, validators, etc.
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    // timestamps will automatically add 'createdAt' and 'updatedAt' fields
    timestamps: true
});

// A Mongoose Model provides an interface to the database for creating,
// querying, updating, deleting records, etc.
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;