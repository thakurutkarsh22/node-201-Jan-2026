const blogsModel = require("../Models/blogsModel");
const userModel = require("../Models/userModel");

class BlogService {

    static async createBlog({title, content, author}) {

        // 1. business logic 
        // user model 
        // author - email uthakur2@gmail.com
        console.log("before blogs model 1")

        const authr = await BlogService.getUserByUserName(author);
        const _id = authr.id;

        console.log("before blogs model")
        const blogsModelObject = blogsModel({title, content, author: _id, nationality: "Indian"});
        console.log("after blogs model")

        // 2. db talking 

        try {
            const response = await blogsModelObject.save(); 
            return response;
        } catch (error) {
            return error;
        }

    }

    static async getUserByUserName(email) {
        try {
            const results = await userModel.findOne({email: email});
            return results;
        } catch(error) {
            throw Error(error)
        }
        
    }

}


module.exports = BlogService