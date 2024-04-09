/**
 * @file index.js
 * @description This file is the entry point for the server.
 * @author Darshan Nariya
 */

// import express and body-parser
import express from "express";
import bodyParser from "body-parser";
// import the pathRouter
import pathRouter from "./api/paths.js";

// Create an express app
const app = express();
// Set the port
const PORT = process.env.PORT || 4000;

// add body parser middleware
app.use(bodyParser.json());

// set the route path
app.use("/", pathRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
