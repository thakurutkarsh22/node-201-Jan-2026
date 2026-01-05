const http = require("node:http");
const PORT = 8089;

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === "/") {

        res.setHeader('Content-Type', 'text/plain');
        res.write("hello world JAN 2026 ");
        res.write("welcome to my website");
        res.end();
    } else if (url === "/abouts") {
        res.end("THis page is create for learning node js and Fitness");
    } else if (url === "/contact") {

        res.setHeader('Content-Type', 'text/plain');
        res.write("Phone: 1234567890 \n");
        res.end("Contact me at: abcd@gmail.com");
    } else if (url === "/fitness") {
        const fitnessInfo = {
            name: "John Doe",
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
        
        // set the response header to indicate JSON content
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(fitnessInfo));

    }
    
    
    // res.end();

});  


server.listen(PORT, () => {
  console.log(`Thumbs Up Server is listening on port ${PORT}`);
});

