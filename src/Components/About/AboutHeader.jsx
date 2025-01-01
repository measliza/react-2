import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AboutHeader = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  return (
    <div>
      <div
        class="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container">
          <h1 class="display-3 mb-3 animated slideInDown">
            {" "}
            {isKhmer ? "អំពី" : "About Us"}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a class="text-body" href="#">
                  {isKhmer ? "ទំព័រដើម" : "Home"}
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-body" href="#">
                  {isKhmer ? "ទំព័រ" : "Pages"}
                </a>
              </li>
              <li class="breadcrumb-item text-dark active" aria-current="page">
                {isKhmer ? "អំពី" : "About Us"}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
