const express = require('express');
const { getAllUsers, getUserByGender, getUsersByFirstName } = require('../Controller/ActivityUserController');
const passwordAuthMiddleware = require('../Middleware/passwordAuthMiddleware');
const { JwtAuthMiddleware } = require('../Middleware/jwtAuthMiddleware');
const passport =  require('passport');
const router = express.Router();



// 1. get all users 

router.get("/getAllUsers", passwordAuthMiddleware, getAllUsers);


// 2. get all the users by gender 
// WAY 1: query PARAMS: 
//  https://www.google.com/search?q=sehwaga   ? - query PARAMS.   (q is key, sehwaga is value)
router.get("/getUsersByGender", JwtAuthMiddleware, getUserByGender);



// passport baseed authentication

const AuthPassportMiddleware = passport.authenticate('jwt', { session: false, failureRedirect: '/' });




router.get("/getUsersByFirstName/:firstName", AuthPassportMiddleware, getUsersByFirstName);


module.exports = router;