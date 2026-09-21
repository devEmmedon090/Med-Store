import express from "express"; // Importing the express module to create an Express application

const app = express(); // Creating an instance of the Express application

app.get("/api/health", (req, res) => {
    res.status(200).json({message: "Success"})
}); // Defining a route for the health check endpoint that responds with a success message

app.listen(3000, () => console.log("Server is up and running on port 3000")); // Starting the server and listening on port 3000, logging a message to the console when the server is running