const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    location: {
        type: 'string',
        required: true
    },
    authority: {
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model('school', schoolSchema);