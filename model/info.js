const Joi = require('joi');
const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
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
})

const Info = mongoose.model('Info', infoSchema);

function validateInfo(info) {
    const schema = {
        name: Joi.string().required(),
        profession: Joi.string().required(),
        company: Joi.string().required(),
        summary: Joi.string().required(),
    };

    return Joi.validate(info, schema);
}

exports.Info = Info;
exports.infoSchema = infoSchema;
exports.validate = validateInfo;