import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Ioc from "../img/imagebg.jpg";
const HomeCarousal = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/3");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={Ioc}
                alt=""
                class="w-100"
                style={{ height: "600px", width: "auto" }}
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-lg-7">
                      <h1 class="display-2 mb-5 animated slideInDown">
                        {products.title}
                      </h1>
                      <a
                        href=""
                        class="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                      >
                        {isKhmer ? "ផលិតផល" : "Product"}
                      </a>
                      <a
                        href=""
                        class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                      >
                        {isKhmer ? "សេវាកម្ម" : "Service"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-lg-7">
                      {/* <h1 class="display-2 mb-5 animated slideInDown">
                        Natural Food Is Always Healthy
                      </h1>
                      <a
                        href=""
                        class="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                      >
                        Products
                      </a>
                      <a
                        href=""
                        class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                      >
                        Services
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousal;
