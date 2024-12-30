import React from "react";
import { Link } from "react-router-dom";
import somImg from "../img/logo2.png";

const AboutNavbar = () => {
  return (
    <div>
      <div
        class="container-fluid fixed-top px-0 wow fadeIn"
        data-wow-delay="0.1s"
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
          <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
            <h1 class="fw-bold text-primary m-0">
              <img src={somImg} alt="" style={{ width: "120px" }} />
            </h1>
          </a>
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
              <a href="index.html" class="nav-item nav-link">
                Home
              </a>
              <Link to="/about" class="nav-item nav-link active">
                About Us
              </Link>
              <Link to="/product" class="nav-item nav-link">
                Products
              </Link>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div class="dropdown-menu m-0">
                  <Link to="/blog" class="dropdown-item">
                    Blog Grid
                  </Link>
                  <Link to="/feature" class="dropdown-item">
                    Our Features
                  </Link>
                  <Link to="/testimonial" class="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/FZFPages" class="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/contactus" class="nav-item nav-link">
                Contact Us
              </Link>
            </div>
            <div class="d-none d-lg-flex ms-2">
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-search text-body"></small>
              </a>
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-user text-body"></small>
              </a>
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-shopping-bag text-body"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AboutNavbar;