const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    metaDes: { type: String, required: true },
    foucKW: { type: String, required: true },
    slug: { type: String, required: true },
    seoTitle: { type: Array, required: true },
    image: { type: String },
    blogCreatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
