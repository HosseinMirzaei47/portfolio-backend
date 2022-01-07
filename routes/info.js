const validateObjectId = require("../middleware/validateObjectId");
const { Info, validate } = require("../model/info");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const info = await Info.find()
        .select("-__v")
        .sort("name");
    res.send(info)
});

router.put("/:id", async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const info = await Info.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            profession: req.body.profession,
            company: req.body.company,
            summary: req.body.summary,
        },
        { new: true }
    );


    if (!info) return res.status(404).send("The info with the given ID was not found.");

    res.send(info);
});

module.exports = router;
