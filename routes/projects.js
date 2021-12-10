const projects = require("../data/projects");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send(projects)
});

router.get("/:name", async (req, res) => {
    const project = projects.find((p) => p.name === req.params.name)
    if (!project) return res.status(404).send('Not found')
    res.send(project)
});

router.put("/:name", async (req, res) => {
    const project = projects.find((p) => p.name === req.params.name)
    if (!project) return res.status(404).send('Not found')

    var index = projects.indexOf(project);
    projects[index] = req.body;

    res.send(projects[index])
});

router.delete("/:name", async (req, res) => {
    const project = projects.find((p) => p.name === req.params.name)
    if (!project) return res.status(404).send('Not found')

    const index = projects.indexOf(project)
    projects.splice(index, 1)

    res.send(project)
});

router.post("/", async (req, res) => {
    const projectExists = projects.filter(project => project.name === req.body.name).length > 0

    if (projectExists) return res.status(406).send(`A project exists with name ${req.body.name}`)

    const project = {
        name: req.body.name,
        description: req.body.description,
        platform: req.body.platform
    }

    projects.push(project)
    res.send(project)
});

module.exports = router;
