const UserService = require("../Services/UserService");

async function registration(req, res) {

    const {name, email, password, age, phoneNumber} = req.body;
    try {
        const response = await UserService.
                    registerUser(name, email, password, age, phoneNumber);
        res.status(201).json(response)
    } catch (Error) {
        res.status(500).json({Error})
    }

}

async function  login (req, res) {
    const {email, password} = req.body;

    try {
        const response = await UserService.
                    loginUser(email, password);
        res.status(200).json(response)
    } catch (Error) {
        res.status(500).json(Error)
    }
}



module.exports = {registration, login}