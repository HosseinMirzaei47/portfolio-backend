const {Project} = require("./model/project");
const {Info} = require("./model/info");
const {User} = require("./model/user");
const mongoose = require("mongoose");
const uri = require('./config/keys').MongoURI

const projects = [
    {
        name: "Cup",
        description: "Financial app that provides an easier access to your bank account",
        platform: "Android"
    },
    {
        name: "Which One Is Larger",
        description: "Crap",
        platform: "Android"
    },
];

const info = {
    name: "Hossein Mirzazadeh",
    profession: "Android Developer - English Teacher",
    company: "Part Software Company",
    summary: "I have been trying to conceptualize app solutions using the latest technologies at the companiy I have been working for. To me, there is nothing more interesting than overcoming challenges and helping others and myself grow."
}

const user = {
    name: "Hossein Mirzazadeh",
    email: "hosseinhidd@gmail.com",
    password: "mypassword",
    isAdmin: false,
}

async function seed() {
    await mongoose.connect(uri);

    await Project.deleteMany({});
    await Info.deleteMany({});
    await User.deleteMany({});

    for (let project of projects) {
        await new Project({
            name: project.name,
            description: project.description,
            platform: project.platform
        }).save();
    }

    await new Info({
        name: info.name,
        profession: info.profession,
        company: info.company,
        summary: info.summary,
    }).save()

    await new User({
        name: user.name,
        email: user.email,
        password: user.password,
    }).save()

    mongoose.disconnect();

    console.info("Populated database successfully!");
}

seed();
