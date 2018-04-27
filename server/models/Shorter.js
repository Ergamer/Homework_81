const mongoose = require('mongoose');


const ShorterSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    }
});


const Shorter = mongoose.model('Shorter', ShorterSchema);

module.exports = Shorter;