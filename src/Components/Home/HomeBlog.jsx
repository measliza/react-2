import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pdone from "../img/pd-1.avif";
import pdtwo from "../img/pd-2.webp";
import pdthree from "../img/pd-3.jpg";

const HomeBlog = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 class="display-5 mb-3">
              {isKhmer
                ? "ផ្នែក​មួយ​នៃ​គេហទំព័រ"
                : "Tracking views, likes, and comments to improve future content"}
            </h1>
            <p>
              {isKhmer
                ? "តាមដានការមើល ការចូលចិត្ត និងមតិយោបល់ ដើម្បីកែលម្អខ្លឹមសារនាពេលអនាគត"
                : "Latest Blog"}
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                class="img-fluid"
                src={pdone}
                alt=""
                style={{ height: "250px", width: "auto" }}
              />
              <div class="bg-light p-4">
                <a class="d-block h5 lh-base mb-4" href="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, eum?
                </a>
                <div class="text-muted border-top pt-4">
                  <small class="me-3">
                    <i class="fa fa-user text-primary me-2"></i>Admin
                  </small>
                  <small class="me-3">
                    <i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <img
                class="img-fluid"
                src={pdtwo}
                alt=""
                style={{ height: "250px", width: "auto" }}
              />
              <div class="bg-light p-4">
                <a class="d-block h5 lh-base mb-4" href="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, esse.
                </a>
                <div class="text-muted border-top pt-4">
                  <small class="me-3">
                    <i class="fa fa-user text-primary me-2"></i>Admin
                  </small>
                  <small class="me-3">
                    <i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <img
                class="img-fluid"
                src={pdthree}
                alt=""
                style={{ height: "250px", width: "auto" }}
              />
              <div class="bg-light p-4">
                <a class="d-block h5 lh-base mb-4" href="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quaerat?
                </a>
                <div class="text-muted border-top pt-4">
                  <small class="me-3">
                    <i class="fa fa-user text-primary me-2"></i>Admin
                  </small>
                  <small class="me-3">
                    <i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
