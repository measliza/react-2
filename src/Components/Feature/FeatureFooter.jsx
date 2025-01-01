import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import somImg from "../img/logo2.png";

const HomeFooter = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  return (
    <div>
      <div
        class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h1 class="fw-bold text-primary mb-4">
                <img src={somImg} alt="" style={{ width: "120px" }} />
              </h1>
              {/* <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita
              </p> */}
              <div class="d-flex pt-2">
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-1"
                  href=""
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-1"
                  href=""
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-1"
                  href=""
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  class="btn btn-square btn-outline-light rounded-circle me-0"
                  href=""
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">
                {isKhmer ? "អាសយដ្ឋាន" : "Address"}
              </h4>
              <p>
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                USA
              </p>
              <p>
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p>
                <i class="fa fa-envelope me-3"></i>info@example.com
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">
                {isKhmer ? "តំណភ្ជាប់រហ័ស" : "Quick Links"}
              </h4>
              <a class="btn btn-link" href="">
                {isKhmer ? "អំពី" : "About Us"}
              </a>
              <a class="btn btn-link" href="">
                {isKhmer ? "ទំនាក់ទំនង" : "Contact Us"}
              </a>
              <a class="btn btn-link" href="">
                {isKhmer ? "សេវាកម្ម" : "Our Service"}
              </a>
              <a class="btn btn-link" href="">
                {isKhmer ? "លក្ខខណ្ឌ" : "Terms & Condition"}
              </a>
              <a class="btn btn-link" href="">
                {isKhmer ? "ការគាំទ្រ" : "Support"}
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">
                {" "}
                {isKhmer ? "ព្រឹត្តិបត្រ" : "Newsletter"}
              </h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                class="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a href="#">
                  {isKhmer ? "ឈ្មោះគេហទំព័ររបស់អ្នក។" : "Your Site Name"}
                </a>
                {isKhmer
                  ? ", រក្សាសិទ្ធិគ្រប់យ៉ាង។"
                  : "    , All Right Reserved."}
              </div>
              <div class="col-md-6 text-center text-md-end">
                {isKhmer ? "រចនាដោយ" : " Designed by"}{" "}
                <a href="https://htmlcodex.com">HTML Codex</a>
                <br />
                {isKhmer ? "ចែកចាយដោយ៖" : "  Distributed By:"}{" "}
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
