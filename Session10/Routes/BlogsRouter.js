const express = require('express');
const { getAllBlogs, getBlogsById, createBlog, deleteBlogById } = require('../Controller/BLogsController');
const blogInputValidation = require('../Middleware/blogInputValidation');

const router = express.Router();


router.post("/createBlog", blogInputValidation, createBlog)


router.get("/getAllBlogs", getAllBlogs)
router.get("/getBLogById/:id", getBlogsById)
router.delete("/deleteBlogById/:id", deleteBlogById)


module.exports = router;