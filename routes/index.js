const express = require("express");
const appointment = require("../controllers/appointment");
const blogs = require("../controllers/blogs");
const news = require("../controllers/news");

const router = express.Router();

// for appointment Routes
router.get("/demo", appointment.welocome);
router.get(
  "/appointment/getAppointmentsByPagination",
  appointment.getAppointmentsByPagination
);
router.post("/appointment/create", appointment.createAppointment);

// for Blogs Routes
router.get("/blog/getAll", blogs.getAllBlogs);
router.get("/blog/getLastThree", blogs.getLastThree);
router.get("/blog/popularBlogs", blogs.popularBlogs);
router.get("/blog/getBlogsByPagination", blogs.blogsGetsByPagination);
router.get("/blog/:slug", blogs.getBlogBySlug);
router.post("/blog/createBlog", blogs.createBlog);
router.patch("/blog/update/:blogId", blogs.updateBlog);
router.delete("/blog/delete/:blogId", blogs.deleteBlog);

// for News Routes
router.get("/news/getAll", news.getAllNews);
router.get("/news/popularNews", news.popularNews);
router.get("/news/getNewsByPagination", news.getNewsByPagination);
router.get("/news/:slug", news.getNewsBySlug);
router.post("/news/createNews", news.createNews);
router.patch("/news/update/:blogId", news.updateNews);
router.delete("/news/delete/:blogId", news.deleteNews);

module.exports = router;
