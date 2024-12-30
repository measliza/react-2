import React from "react";
import car from "../img/delivery-car.png";
import credit from "../img/credit-card.png";
import date from "../img/calendar.png";

const AboutFeature = () => {
  return (
    <div>
      <div class="container-fluid bg-light bg-icon py-6">
        <div class="container">
          <div
            class="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 class="display-5 mb-3">Our Features</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={car} alt="" />
                <h4 class="mb-3">Delivery</h4>
                <p class="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a
                  class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={credit} alt="" />
                <h4 class="mb-3">Payment</h4>
                <p class="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a
                  class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={date} alt="" />
                <h4 class="mb-3">Calendar</h4>
                <p class="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a
                  class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeature;
