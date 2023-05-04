const Blog = require("../model/Blogs");

const getAllBlogs = async (req, res) => {
  let data = await Blog.find();
  if (data) {
    res.status(200).json({ data });
  } else {
    res.status(500).json({ err: "getting some error" });
  }
};

const getBlogsByPagination = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // default to first page if page is not specified
  const limit = parseInt(req.query.limit) || 21; // default to 10 documents per page if limit is not specified
  const startIndex = (page - 1) * limit;

  try {
    const totalDocs = await Blog.countDocuments();
    const data = await Blog.find().skip(startIndex).limit(limit);

    res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(totalDocs / limit),
      data,
    });
  } catch (err) {
    res.status(500).json({ err: "getting some error" });
  }
};

const createBlog = async (req, res) => {
  try {
    let result = await Blog.create({
      title: req.body.title,
      metaDes: req.body.metaDes,
      foucKW: req.body.foucKW,
      slug: req.body.slug,
      seoTitle: req.body.seoTitle,
      image: req.body.image,
    });
    res
      .status(200)
      .json({ data: result, mesasge: "blogs is created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogsByPagination,
};
