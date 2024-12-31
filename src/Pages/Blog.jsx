import React, { useEffect, useState } from "react";
import HomeNavbar from "../Components/Home/HomeNavbar";
import BlogHeader from "../Components/Blog/BlogHeader";
import BlogStart from "../Components/Blog/BlogStart";
import BlogFooter from "../Components/Blog/BlogFooter";
import BlogBack from "../Components/Blog/BlogBack";
import HomeCart from "../Components/Home/HomeCart";

const Blog = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <BlogHeader />
      <BlogStart />
      <BlogFooter />
      <BlogBack />
    </div>
  );
};

export default Blog;
