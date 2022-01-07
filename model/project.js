const Joi = require('joi');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: false
    }
})

const Project = mongoose.model('Project', projectSchema);

function validateProject(project) {
    const schema = {
        name: Joi.string().required(),
        description: Joi.string().required(),
        platform: Joi.string(),
    };

    return Joi.validate(project, schema);
}

exports.Project = Project;
exports.projectSchema = projectSchema;
exports.validate = validateProject;