const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    moredesc: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        data: Buffer,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);