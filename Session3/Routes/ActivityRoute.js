const express = require('express');
const { getAllUsers, getUserByGender, getUsersByFirstName } = require('../Controller/ActivityUserController');
const router = express.Router();



// 1. get all users 

router.get("/getAllUsers", getAllUsers);


// 2. get all the users by gender 
// WAY 1: query PARAMS: 
//  https://www.google.com/search?q=sehwaga   ? - query PARAMS.   (q is key, sehwaga is value)
router.get("/getUsersByGender", getUserByGender);


// 3. get user by first name
// WAY 2: URL params  : -> means its url params 
// https://pokeapi.co/api/v2/pokemon/pikachu | https://pokeapi.co/api/v2/pokemon/ditto 
router.get("/getUsersByFirstName/:firstName", getUsersByFirstName);


module.exports = router;