const express = require("express");
const demoRequest = require("../controllers/demoRequest");
const blogs = require("../controllers/blogs");
const news = require("../controllers/news");

const router = express.Router();

// for demoRequest Routes
router.get("/demo", demoRequest.welocome);
router.get(
	"/demo/getDemoRequestsByPagination",
	demoRequest.getDemoRequestsByPagination
);
router.post("/demo/createDemoRequest", demoRequest.createDemoRequest);

// for Blogs Routes
router.get("/blog/getAll", blogs.getAllBlogs);
router.get("/blog/getLastThree", blogs.getLastThree);
router.get("/blog/getBlogsByPagination", blogs.blogsGetsByPagination);
router.get("/blog/:slug", blogs.getBlogBySlug);
router.post("/blog/createBlog", blogs.createBlog);
router.patch("/blog/update/:blogId", blogs.updateBlog);
router.delete("/blog/delete/:blogId", blogs.deleteBlog);

// for News Routes
router.get("/news/getAll", news.getAllNews);
router.get("/news/getNewsByPagination", news.getNewsByPagination);
router.get("/news/:slug", news.getNewsBySlug);
router.post("/news/createNews", news.createNews);
router.patch("/news/update/:blogId", news.updateNews);
router.delete("/news/delete/:blogId", news.deleteNews);

module.exports = router;
