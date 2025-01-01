import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HomeFirm = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
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
      <div class="container-fluid bg-primary bg-icon mt-5 py-6">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">
              <h1 class="display-5 text-white mb-3">{products.title}</h1>
              <p class="text-white mb-0">{products.description}</p>
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

export default HomeFirm;
