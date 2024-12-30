import React, { useEffect, useState } from "react";
import somImg from "../img/imagebg.jpg";

const ProductPageHeader = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/2");
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
      <div
        class="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container">
          <h1 class="display-3 mb-3 animated slideInDown">Products</h1>
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
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductPageHeader;
