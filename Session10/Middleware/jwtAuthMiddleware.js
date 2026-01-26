const jwt =  require('jsonwebtoken');
const JWT_SECRET = "asdjfhsfiuh3948pasiduvhv3489vb";

function JwtAuthMiddleware(req, res, next) {
    // get the token from headers
    const headers = req.headers;
    const authorization = headers != null ? headers.authorization : null; // "Bearer asqweqe213qwe123qwe" from the postman

    const token = authorization != null ? authorization.split(" ")[1] : null; // "asqweqe213qwe123qwe"

    if (!token) {
        // req is bad 
         res.status(401).json({ message: "Login you look like a new in a new device" });
         return;
    } else {
        // verify the token

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                // token is invalid
                res.status(401).json({ message: "Invalid Token. Please login again.",  error: err });
                return;
            } else {
                // req is good 
                req.email = decoded.email;
                next();
            }

        });
    }


}


module.exports = {   JwtAuthMiddleware, JWT_SECRET  };