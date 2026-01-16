const { default: mongoose } = require("mongoose");
const blogsModel = require("../Models/blogsModel");

async function createBlog(req, res) {

    const { title, content, author } = req.body


    // user model 

    const blogsModelObject = blogsModel({title, content, author, nationality: "Indian"});

    // saving to DB 

    try {
        // .save will do the DB call req to DB to save the object (5 sec)
        const response = await blogsModelObject.save(); 
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({message: 'something went wrong', error});
    }
}


async function getAllBlogs(req, res) {
    try {
        const results = await blogsModel.find({});
        res.status(200).json({message: "successfully fetched all the blogs", data: results});
    } catch(error) {
        res.status(500).json({message: "Failure of db to fetch data"});
    }
}


async function getBlogsById(req, res) {

    const id = req.params.id; // "64b8f0c2e1d3c2a5f6b8e9d1"
    try {
        const results = await blogsModel.find({ _id: id}); 
        res.status(200).json({message: "successfully fetched all the blogs", data: results});
    } catch(error) {
        res.status(500).json({message: "Failure of db to fetch data"});
    }

}


async function deleteBlogById(req, res) {
    const id = req.params.id; // "64b8f0c2e1d3c2a5f6b8e9d1"
    try {
        const results = await blogsModel.deleteOne({ _id: id});
        res.status(200).json({message: "successfully deleted the blog", data: results});
    } catch(error) {
        res.status(500).json({message: "Failure of db to delete data"});
    }
}

module.exports = {createBlog, getAllBlogs, getBlogsById, deleteBlogById}