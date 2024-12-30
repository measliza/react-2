import React from "react";
import HomeNaver from "../Components/Home/HomeNavbar";
import BlogHeader from "../Components/Blog/BlogHeader";
import BlogStart from "../Components/Blog/BlogStart";
import BlogFooter from "../Components/Blog/BlogFooter";
import BlogBack from "../Components/Blog/BlogBack";

const Blog = () => {
  return (
    <div>
      <HomeNaver />
      <BlogHeader />
      <BlogStart />
      <BlogFooter />
      <BlogBack />
    </div>
  );
};

export default Blog;
