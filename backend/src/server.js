import express from "express"; // Importing the express module to create an Express application
import path from "path"; // Importing the path module to work with file and directory paths
import { ENV } from "./config/env.js"

const app = express(); // Creating an instance of the Express application
const __dirname = path.resolve(); // Getting the absolute path of the current directory

app.get("/api/health", (req, res) => {
    res.status(200).json({message: "Success"})
}); // Defining a route for the health check endpoint that responds with a success message


// Make our app ready for production
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../admin/dist" )));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
    });
}

app.listen(ENV.PORT, () => console.log("Server is up and running on port " + ENV.PORT)); // Starting the server and listening on port 3000, logging a message to the console when the server is running