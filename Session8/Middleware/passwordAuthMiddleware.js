require('dotenv').config()

const SERVER_SECRET_PASSWORD = process.env.SERVER_SECRET_PASSWORD;

function passwordAuthMiddleware(req, res, next) {

    const headers = req.headers;
    const authorization = headers != null ? headers.authorization : null; // "" from the postman 

    if (authorization !== SERVER_SECRET_PASSWORD) {
        // req is bad 
         res.status(401).json({ message: "Unauthorized access. Invalid server password in headers. from middleware" });
         return;
    } else {
        // req is good
        next(); // pass the control
    }
}

module.exports = passwordAuthMiddleware;