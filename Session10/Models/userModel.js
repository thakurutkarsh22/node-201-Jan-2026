const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        min: 18
    },
    phoneNumber: {
        type: String,
        match: /^[0-9]{10}$/
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

//'User' -> is User collection in mongoDB 