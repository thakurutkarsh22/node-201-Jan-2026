const express = require('express');
const { getAllBlogs, getBlogsById, createBlog, deleteBlogById } = require('../Controller/BLogsController');

const router = express.Router();


router.post("/createBlog", createBlog)


router.get("/getAllBlogs", getAllBlogs)
router.get("/getBLogById/:id", getBlogsById)
router.delete("/deleteBlogById/:id", deleteBlogById)


module.exports = router;