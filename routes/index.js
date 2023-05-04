const express = require("express");
const demoRequest = require("../controllers/demoRequest");
const blogs = require("../controllers/blogs");

const router = express.Router();

// for demoRequest Routes
router.get("/demo", demoRequest.welocome);
router.get(
  "/demo/getDemoRequestsByPagination",
  demoRequest.getDemoRequestsByPagination
);
router.post("/demo/createDemoRequest", demoRequest.createDemoRequest);

// for Blogs Routes
router.get("/blog", blogs.getAllBlogs);
router.get(
	"/blog/getBlogsByPagination",
	blogs.getBlogsByPagination
);
router.post("/blog/createBlog", blogs.createBlog);


module.exports = router;
