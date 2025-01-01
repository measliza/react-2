import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AboutFirmVisit = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  return (
    <div>
      <div class="container-fluid bg-primary bg-icon mt-5 py-6">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">
              <h1 class="display-5 text-white mb-3">
                {" "}
                {isKhmer ? "ទស្សនាក្រុមហ៊ុនរបស់យើង។" : "Visit Our Firm"}
              </h1>
              <p class="text-white mb-0">
                {isKhmer
                  ? "ក្រុមហ៊ុនរបស់យើងផ្តល់នូវដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត សេវាកម្មពិសេស និងអ្នកជំនាញដែលអាចជឿទុកចិត្តបាន ដើម្បីជួយអ្នកឱ្យទទួលបានជោគជ័យ។"
                  : "Our firm delivers innovative solutions, exceptional service, and trusted expertise to help you succeed."}
              </p>
            </div>
            <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
              <a
                class="btn btn-lg btn-secondary rounded-pill py-3 px-5"
                href=""
              >
                {isKhmer ? "ចូលមើលឥឡូវនេះ" : "Visit Now"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirmVisit;
