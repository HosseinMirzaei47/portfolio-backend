const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const {Project, validate} = require("../model/project");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const projects = await Project.find()
        .select("-__v")
        .sort("name");
    res.send(projects)
});

router.get("/:id", validateObjectId, async (req, res) => {
    const project = await Project.findById(req.params.id).select("-__v");
    if (!project) return res.status(404).send("The project with the given name was not found.");
    res.send(project);
});

router.put("/:id", auth, async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const project = await Project.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            platform: req.body.platform
        },
        {new: true}
    );

    if (!project) return res.status(404).send("The project with the given ID was not found.");

    res.send(project);
});

router.delete("/:id", auth, async (req, res) => {
    const project = await Project.findByIdAndRemove(req.params.id);
    if (!project) return res.status(404).send("The project with the given ID was not found.");
    res.send(project);
});

router.post("/", auth, async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let project = new Project({
        name: req.body.name,
        description: req.body.description,
        platform: req.body.platform
    });
    project = await project.save();

    res.send(project);
});

module.exports = router;
