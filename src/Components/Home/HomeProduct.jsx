import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.slice());
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 gx-5 align-items-end">
            <div class="col-lg-6">
              <div
                class="section-header text-start mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <h1 class="display-5 mb-3">Our Products</h1>
                <p>
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed rebum vero dolor duo.
                </p>
              </div>
            </div>
            <div
              class="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            ></div>
          </div>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div class="product-item">
                      <div class="position-relative bg-light overflow-hidden">
                        <img
                          class="img-fluid w-100"
                          src={product.image}
                          alt=""
                          style={{
                            height: "300px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                          }}
                        />
                        <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                          New
                        </div>
                      </div>
                      <div
                        class="text-center p-4"
                        style={{
                          height: "100px",
                        }}
                      >
                        <a
                          class="d-block h5 mb-2"
                          href=""
                          style={{ fontSize: "15px", margin: "auto 0px" }}
                        >
                          {product.title}
                        </a>
                        <span class="text-primary me-1">${product.price}</span>
                      </div>
                      <div class="d-flex border-top">
                        <small class="w-50 text-center border-end py-2">
                          <a class="text-body" href="">
                            <i class="fa fa-eye text-primary me-2"></i>View
                            detail
                          </a>
                        </small>
                        <small class="w-50 text-center py-2">
                          <a
                            class="text-body"
                            onClick={() => handleAddToCart(product)}
                          >
                            <i class="fa fa-shopping-bag text-primary me-2"></i>
                            Add to cart
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
