const { default: mongoose } = require("mongoose");
const blogsModel = require("../Models/blogsModel");
const userModel = require("../Models/userModel");
const BlogService = require("../Services/BlogService");

async function createBlog(req, res) {
    try {
        const response = await BlogService.createBlog(req.body)
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