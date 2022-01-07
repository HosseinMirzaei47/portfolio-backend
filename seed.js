const { Project } = require("./model/project");
const { Info } = require("./model/info");
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
        description: "Functionality Nattramn is an application which allows users to publish their articles online. A user can share, comment on, like, search articles. App uses Room to display caches data to UI when offline and requests to update local data using Retrofit library. Development Environment The app is written entirely in Kotlin and uses the Gradle build system. Architecture The architecture is built around Android Architecture Components. I followed the recommendations laid out in the Guide to App Architecture when deciding on the architecture for the app. I kept logic away from Activities and Fragments and moved it to ViewModels. I observed data using LiveData and used the Data Binding Library to bind UI components in layouts to the app's data sources. I used a Repository layer for handling data operations. I used Navigation component to simplify into a single Activity app. I used Kotlin Coroutines to handle operations proper threads in Android.",
        platform: "Android"
    },
];

const info = {
    name: "Hossein Mirzazadeh",
    profession: "Android Developer - English Teacher",
    company: "Part Software Company",
    summary: "I have been trying to conceptualize app solutions using the latest technologies at the companiy I have been working for. To me, there is nothing more interesting than overcoming challenges and helping others and myself grow."
}

async function seed() {
    await mongoose.connect(uri);

    await Project.deleteMany({});
    await Info.deleteMany({});

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

    mongoose.disconnect();

    console.info("Populated database successfully!");
}

seed();
