import React from "react";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";
import testimonial4 from "../img/testimonial-4.jpg";

const TestimTestim = () => {
  return (
    <div>
      <div class="container-fluid bg-light bg-icon py-6">
        <div class="container">
          <div
            class="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 class="display-5 mb-3">Customer Review</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          {/* <div
            class="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          > */}
          <div class="testimonial-item position-relative bg-white p-5 mt-4">
            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <div class="d-flex align-items-center">
              <img
                src={testimonial1}
                alt=""
                class="flex-shrink-0 rounded-circle"
              />
              <div class="ms-3">
                <h5 class="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
          <div class="testimonial-item position-relative bg-white p-5 mt-4">
            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <div class="d-flex align-items-center">
              <img
                src={testimonial2}
                alt=""
                class="flex-shrink-0 rounded-circle"
              />
              <div class="ms-3">
                <h5 class="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
          <div class="testimonial-item position-relative bg-white p-5 mt-4">
            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <div class="d-flex align-items-center">
              <img
                src={testimonial3}
                alt=""
                class="flex-shrink-0 rounded-circle"
              />
              <div class="ms-3">
                <h5 class="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
          <div class="testimonial-item position-relative bg-white p-5 mt-4">
            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <div class="d-flex align-items-center">
              <img
                src={testimonial4}
                alt=""
                class="flex-shrink-0 rounded-circle"
              />
              <div class="ms-3">
                <h5 class="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimTestim;
