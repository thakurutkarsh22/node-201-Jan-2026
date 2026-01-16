const userModel = require("../../Session5/Models/userModel");

async function createUser(req, res) {

    const {name, email, password} = req.body;
    const userObj = userModel({name, email, password})

    try {
        const response = await userObj.save();
        res.status(201).json({response})

    } catch (Error) {
        res.status(500).json({Error})
    }

}

module.exports = {createUser }