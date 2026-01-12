const blogsModel = require("../Models/blogsModel");

async function createBlog(req, res) {

    console.log("printing body of create blog", req.body);
    const { title, content, author } = req.body


    // user model 

    const blogsModelObject = blogsModel({title, content, author, nationality: "Indian"});

    // saving to DB 

    try {
        // .save will do the DB call req to DB to save the object (5 sec)
        const response = await blogsModelObject.save(); 
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({message: 'something went wrong'});
    }




}


function getAllBlogs(req, res) {
    
}


function getBlogsById(req, res) {
    
}


function deleteBlogById(req, res) {
    
}

module.exports = {createBlog, getAllBlogs, getBlogsById, deleteBlogById}