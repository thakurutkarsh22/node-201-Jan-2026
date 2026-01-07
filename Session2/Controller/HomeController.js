
// Home response is a HANDLER function
function HomeResponse (req, res) {
    // send is only with express js and not nodejs
    res.status(200).send("hello world JAN 2026 \n welcome to my website express. change here 2");
}

module.exports = { HomeResponse };

