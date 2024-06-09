// const express = require("express"); // commonjs
// import express from "express";  // module
import express from "express";
// Allows us to take in incoming POST Request bodies
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // indicates that we will be using JSON data in our whole application

app.use("/users", usersRoutes);

// Express and Node.js is all about Route // Browsers can only make get request
app.get("/", (req, res) => res.send("Hello from Home Page"));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
); // to listen to our application on the specified PORT and the () => {} call back function we want to be executed when on that PORT
