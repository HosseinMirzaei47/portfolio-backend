const info = require("../data/info");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send(info)
});

router.put("/", async (req, res) => {
    // validate schema

    info.name = req.body.name
    info.profession = req.body.profession
    info.company = req.body.company
    info.summary = req.body.summary

    res.send(info)
});

module.exports = router;
