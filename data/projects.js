const projects = [
    {
        "name": "Cup",
        "description": "Financial app that provides an easier access to your bank account",
        "platform": "Android"
    },
    {
        "name": "Which One Is Larger",
        "description": "Functionality Nattramn is an application which allows users to publish their articles online. A user can share, comment on, like, search articles. App uses Room to display caches data to UI when offline and requests to update local data using Retrofit library. Development Environment The app is written entirely in Kotlin and uses the Gradle build system. Architecture The architecture is built around Android Architecture Components. I followed the recommendations laid out in the Guide to App Architecture when deciding on the architecture for the app. I kept logic away from Activities and Fragments and moved it to ViewModels. I observed data using LiveData and used the Data Binding Library to bind UI components in layouts to the app's data sources. I used a Repository layer for handling data operations. I used Navigation component to simplify into a single Activity app. I used Kotlin Coroutines to handle operations proper threads in Android.",
        "platform": "Android"
    },
]

module.exports = projects