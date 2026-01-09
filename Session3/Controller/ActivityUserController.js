const userData = require("../userData");

function getAllUsers (req, res) {
    const users = userData.data; // [ {}, {}, {}]
    const payload = {
        users,
        size: users.length
    }
    res.status(200).json(payload);
}


function getUserByGender (req, res) {
    const query = req.query; // { q: 'sehwaga'  } |  { gender: 'alien' }
    const searchedGender = query != null &&  query.gender;

    const filteredData = userData.data.filter(user => user.gender === searchedGender);

    const payload = {
        users: filteredData,
        size: filteredData.length
    };

    res.status(200).json(payload);
}


function getUsersByFirstName (req, res) {
    const paramsObject = req.params; // { firstName: 'pikachu'  } |  { firstName: 'ditto' }
    const searchedFirstName = paramsObject.firstName;


    const filteredData = userData.data.filter(user => user.name.first.toLowerCase() === searchedFirstName.toLowerCase());
    res.status(200).json({
        users: filteredData
    });
}

module.exports = { getAllUsers, getUserByGender, getUsersByFirstName }