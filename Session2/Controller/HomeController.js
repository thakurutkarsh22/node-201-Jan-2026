
// Home response is a HANDLER function
function HomeResponse (req, res) {
    // send is only with express js and not nodejs
    res.status(200).send("hello world JAN 2026 \n welcome to my website express. change here 2");
}


function AboutResponse (req, res) {
    res.status(200).send("This is the about page. \n We are learning express js. about page response from HomeController.js");
}

function ContactResponse (req,res) {
    res.status(200).send("Phone: 1234567890 \n Contact me at: utkarsh@example.com EXPRESS !!!");
}

module.exports = { HomeResponse, AboutResponse, ContactResponse };