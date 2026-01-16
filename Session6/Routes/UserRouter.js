const express = require('express');
const { createUser } = require('../Controller/UserCOntroller');
const router = express.Router();


router.post("/createuser", createUser)


module.exports = router;