import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BlogHeader = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  return (
    <div>
      <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
          <h1 class="display-3 mb-3 animated slideInDown">
            {isKhmer
              ? "តាមដានការមើល ការចូលចិត្ត និងមតិយោបល់ ដើម្បីកែលម្អខ្លឹមសារនាពេលអនាគត"
              : "Latest Blog"}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a class="text-body" href="#">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-body" href="#">
                  Pages
                </a>
              </li>
              <li class="breadcrumb-item text-dark active" aria-current="page">
                Blog Grid
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
