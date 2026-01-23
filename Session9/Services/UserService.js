const userModel = require("../Models/userModel");
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../Middleware/jwtAuthMiddleware");

class UserService {

    static async registerUser(name, email, password, age, phoneNumber) {
        try {
            const hashedPassword = await this.hashPassword(password);
            const userObj = userModel({name, email, password: hashedPassword, age, phoneNumber})
            const response = await userObj.save();
            return response;
        } catch (error) {
            return error;
        }
    }

    static async hashPassword(plainPassword) {
        const saltRounds = 10; // complexity of the hash
        // asdf1234 + salt +  date and time = unique hash 2$y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    }

    static async loginUser(email, password) {
        //  1. we should check if the email exists in DB
        // store in db 
        // check how many times user has tried to login
        // if(>15) {
        //     return you cant login for next 24 hours
        // }
        
        
        const user = await this.getUserByEmail(email);
        const isLoggedIN = {
            status: false,
        }
        if (!user) {

            return {
                 status: false,
                 message: "User does not exist"
            }
        } else {
            // validation of password
            // password -> plain text password from req
            // user.password -> hashed password from DB

            const plainTextPasswordFromReq = password; // asdf1234
            const hashedPasswordFromDB = user.password; // 2$y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW

            const isPasswordValid = await bcrypt.compare(plainTextPasswordFromReq, hashedPasswordFromDB);
            const tokenPayload = {
                userId: user._id,
                email: user.email,
                name: user.name
            }
            let token = "";
            if (!isPasswordValid) {
                return {
                    status: false,
                    message: "Invalid Password"
                }
            } else {

                token = jwt.sign(tokenPayload, JWT_SECRET, {expiresIn: '10000'});

                isLoggedIN.status = true;
                isLoggedIN.user = user;
                isLoggedIN.token = token;
                return isLoggedIN;
            }
            
        }
        
    }

    static async getUserByEmail(email) {
        try {
            const user = await userModel.findOne({email: email});
            return user;
        } catch (error) {
            return null;
        }
    }
}


module.exports = UserService