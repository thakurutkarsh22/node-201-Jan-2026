const express = require('express');
const ActivityRouter = require('./Routes/ActivityRoute');
const HomeRouter = require('./Routes/HomeRoute');
const PORT = 8089;

const server = express();


// for home page ONLY get req is allowed
// this is a HANDLER function - handles the incoming request and sends response
server.use("/", HomeRouter)

server.get("/fitness", (req, res) => {
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


server.listen(PORT, () => {
  console.log(`Thumbs Up Server is listening on port EXPRESS ${PORT}`);
});