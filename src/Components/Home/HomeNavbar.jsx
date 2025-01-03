import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import somImg from "../img/logo2.png";

const HomeNavbar = ({ setShowCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();
  const totalProductCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageSwitch = (language) => {
    const pathWithoutLanguage = location.pathname.split("/").slice(2).join("/");
    navigate(`/${language}/${pathWithoutLanguage}`);
  };

  return (
    <div
      className={`container-menu-desktop ${isScrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: isScrolled ? "white" : "transparent",
        transition:
          "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div class="col-lg-6 px-5 text-start">
          <small>
            <i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA
          </small>
          <small class="ms-4">
            <i class="fa fa-envelope me-2"></i>info@example.com
          </small>
        </div>
        <div class="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a class="text-body ms-3" href="">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="text-body ms-3" href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="text-body ms-3" href="">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="text-body ms-3" href="">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to={`/${currentLanguage}/home`} class="navbar-brand ms-4 ms-lg-0">
          <img src={somImg} alt="" style={{ width: "120px" }} />
        </Link>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              // className={currentPath.includes('/home') ? 'active' : ''}
              to={`/${currentLanguage}/home`}
              class="nav-item nav-link active"
            >
              {isKhmer ? "ទំព័រដើម" : "Home"}
            </Link>
            <Link
              // className={currentPath.includes('/about') ? 'active' : ''}
              to={`/${currentLanguage}/about`}
              class="nav-item nav-link"
            >
              {isKhmer ? "អំពី" : "About Us"}
            </Link>
            <Link to="/product" class="nav-item nav-link">
              {isKhmer ? "ផលិតផល" : "Product"}
            </Link>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {isKhmer ? "ព័ត៌មាន" : "Pages"}
              </a>
              <div class="dropdown-menu m-0">
                <Link to="/blog" class="dropdown-item">
                  {isKhmer ? "ព័ត៌មានបន្ថែំ" : "Blog Grid"}
                </Link>
                <Link to="/feature" class="dropdown-item">
                  {isKhmer ? "លក្ខណៈពិសេស" : "Our Featur"}
                </Link>
                <Link to="/testimonial" class="dropdown-item">
                  {isKhmer ? "សំបុត្រ" : "Testimonial"}
                </Link>
                <Link to="/FZFPages" class="dropdown-item">
                  {isKhmer ? "ទំព័រទី​ ៤០៤" : "404Pages"}
                </Link>
              </div>
            </div>
            <Link to="/contactus" class="nav-item nav-link">
              {isKhmer ? "ការទាក់ទង" : "Contact Us"}
            </Link>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {currentLanguage === "en" ? "English" : "Khmer"}
              </a>
              <div class="dropdown-menu m-0">
                <div
                  onClick={() => handleLanguageSwitch("en")}
                  class="dropdown-item"
                >
                  English
                </div>
                <div
                  onClick={() => handleLanguageSwitch("kh")}
                  class="dropdown-item"
                >
                  Khmer
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-flex ms-2">
            <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
              <small class="fa fa-search text-body"></small>
            </a>
            <div class="btn-sm-square bg-white rounded-circle ms-3">
              <small class="fa fa-user text-body"></small>
            </div>

            <div
              class="btn-sm-square bg-white rounded-circle ms-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowCart(true)}
            >
              <small class="fa fa-shopping-bag ">
                <span style={{ color: "red", marginLeft: "3px" }}>
                  {totalProductCount}
                </span>
              </small>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;
