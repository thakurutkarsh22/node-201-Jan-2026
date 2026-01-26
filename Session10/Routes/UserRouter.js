const express = require('express');
const { createUser, login, registration } = require('../Controller/UserCOntroller');
const router = express.Router();


// registration 
router.post("/createuser", registration)

// login
router.post("/login", login)


module.exports = router;