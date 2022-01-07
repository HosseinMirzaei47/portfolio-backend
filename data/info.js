const mongoose = require('mongoose');

const Info = mongoose.model('Info', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
}));

const info = {
    name: "Hossein Mirzazadeh",
    profession: "Android Developer - English Teacher",
    company: "Part Software Company",
    summary: "I have been trying to conceptualize app solutions using the latest technologies at the companiy I have been working for. To me, there is nothing more interesting than overcoming challenges and helping others and myself grow."
}

module.exports = info