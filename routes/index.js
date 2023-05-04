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
router.get("/blogs/getAll", blogs.getAllBlogs);
router.get("/blogs/:slug", blogs.getBlogBySlug);

router.get(
	"/blog/getBlogsByPagination",
	blogs.getBlogsByPagination
);
router.post("/blog/createBlog", blogs.createBlog);
router.patch("/blog/update/:blogId", blogs.updateBlog);
router.delete("/blog/delete/:blogId", blogs.deleteBlog);


module.exports = router;
