const {User, validate, validateLoginBody} = require("../model/user");
const _ = require("lodash");
const bcrypt = require('bcrypt');
const express = require("express");
const router = express.Router();

router.post('/login', async (req, res) => {
    console.log('login attempt')
    const {error} = validateLoginBody(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    console.log('searching for the user')
    let user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Invalid email or password.');

    console.log('checking password')
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    console.log('generating token')
    const token = user.generateAuthToken();
    res.send(token);
});

router.post("/register", async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send("User already registered.");

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
        .header("x-auth-token", token)
        .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
