const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true,
    },
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this._id, name: this.name, email: this.email, isAdmin: this.isAdmin
    }, config.get("jwtPrivateKey"));
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    const schema = {
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required()
    };

    return Joi.validate(user, schema);
}

function validateLoginBody(user) {
    const schema = {
        email: Joi.string().required().email(),
        password: Joi.string().required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
exports.validateLoginBody = validateLoginBody;
