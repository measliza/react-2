import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import ContactUs from "./Pages/ContactUs";
import FZFPages from "./Pages/FZFPages";
import Blog from "./Pages/Blog";
import { CartProvider } from "./Components/CartContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Feature from "./Pages/Feature";
import Testimonial from "./Pages/Testimonial";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en/home" />} />
          {/* English  */}
          <Route path="/en/home" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/FZFPages" element={<FZFPages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/testimonial" element={<Testimonial />} />
          {/* Khmer */}
          <Route path="/kh/home" element={<Home />} />
          <Route path="/kh/about" element={<About />} />
          {/* <Route path="/product" element={<Product />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/FZFPages" element={<FZFPages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/testimonial" element={<Testimonial />} /> */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
