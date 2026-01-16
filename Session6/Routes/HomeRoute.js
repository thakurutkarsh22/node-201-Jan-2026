const express = require('express');
const { HomeResponse, AboutResponse, ContactResponse } = require('../Controller/HomeController');
const router = express.Router();

router.get("/", HomeResponse);
router.get("/home", HomeResponse);
router.get("/abouts", AboutResponse);
router.get("/contact", ContactResponse);

module.exports = router;