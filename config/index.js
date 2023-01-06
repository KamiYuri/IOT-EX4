module.exports = {
    database: {
        username: 'root',
        password: 'root',
        database: 'sample_guides'
    },
    swagger: {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Express API with Swagger",
                version: "0.1.0",
                description:
                    "This is a simple CRUD API application made with Express and documented with Swagger",
            },
            servers: [
                {
                    url: "http://localhost:3000/",
                },
            ],
            host: 'localhost:3000',
            basePath: "/"
        },

        apis: ["./controllers/*.js", "./database/models/*.js"],
    }
}