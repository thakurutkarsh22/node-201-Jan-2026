const express = require('express');
const { HomeResponse } = require('./Controller/HomeController');
const PORT = 8089;

const server = express();


// for home page ONLY get req is allowed
// this is a HANDLER function - handles the incoming request and sends response
server.get("/", HomeResponse);

server.get("/home", HomeResponse);

server.get("/abouts", (req, res) => {
    res.status(200).send("This page is created for learning node js and Fitness using EXPRESS");
});

server.get("/contact", (req, res) => {
    res.status(200).send("Phone: 1234567890 \n Contact me at: utkarsh@example.com EXPRESS !!!");
});

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


server.listen(PORT, () => {
  console.log(`Thumbs Up Server is listening on port EXPRESS ${PORT}`);
});