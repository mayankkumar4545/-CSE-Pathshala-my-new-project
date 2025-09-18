import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./Blogs.css";

const API_URL = "http://localhost:5000/api/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBlogs(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="blogs-section">
      <div className="container">
        <div className="blogs-header">
          <h2 className="blogs-title">From the Blog</h2>
          <p className="blogs-subtitle">
            Explore our latest articles, insights, and stories from the tech
            world.
          </p>
        </div>

        <div className="row justify-content-center">
          {loading ? (
            <p>Loading posts...</p>
          ) : blogs.length > 0 ? (
            blogs.map((post) => <BlogCard key={post._id} post={post} />)
          ) : (
            <p>No blog posts have been published yet. Check back soon!</p>
          )}
        </div>

        <div className="text-center mt-5">
          <Link to="/blogs" className="btn view-all-btn">
            {/* The button text is now wrapped in a <span> */}
            <span>View All Posts</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
