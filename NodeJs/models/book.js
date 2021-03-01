const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    isbn: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Book', bookSchema)