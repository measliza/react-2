import React, { useEffect, useState } from "react";

const AboutAbout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/15");
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
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img class="img-fluid w-100" src={products.image} />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="display-6 mb-5">{products.title}</h1>
              <p class="mb-4">{products.description}</p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Tempor erat elitr
                rebum at clita
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Clita duo justo
                magna dolore erat amet
              </p>
              <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAbout;
