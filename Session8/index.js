const express = require('express');
const mongoose = require("mongoose");
const ActivityRouter = require('./Routes/ActivityRoute');
const HomeRouter = require('./Routes/HomeRoute');
const BlogsRouter = require("./Routes/BlogsRouter");
const UserRoter = require("./Routes/UserRouter");
const PORT = 8089;

const server = express();
require('dotenv').config()


// midlleware that will work for all the paths/endpoints and for any request -> it will work for 
// every request 

/**
 * Returns middleware that only parses json and only looks at 
 * requests where the Content-Type header matches the type option.
 */
server.use(express.json());


// for home page ONLY get req is allowed
// this is a HANDLER function - handles the incoming request and sends response
server.use("/", HomeRouter)

server.get("/fitness", (req, res, next) => {
    const fitnessInfo = {
        name: "John Doe express",
        age: 30,
        height: "5ft 10in",
        hobbies: ["running", "cycling", "swimming"],
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        },
        shouldSleepEightHours: true
    };

    // behind the scenes send is doing JSON.stringify for objects
    // send is only for String 

    // json behind the scenes sets the content-type to application/json
    // json is also Stringifying the object
    res.status(200).json(fitnessInfo);
});

// ACTIVITY 
// we need to support new functionality 
// use supports - GET, POST, PUT, DELETE, PATCH
server.use("/api/v1/users/", ActivityRouter)

// Blogs 
server.use("/api/v1/blogs/", BlogsRouter)

// User 
server.use("/api/v1/user",UserRoter );


const uri = "mongodb://localhost:27017/"; // mongoDB server 
const database = "Crio2026Jan" // databases
mongoose.connect(uri + database).then(() => {
    console.log("DB connected successfully")
})


server.listen(PORT, () => {
  console.log(`Thumbs Up Server is listening on port EXPRESS ${PORT}`);
});