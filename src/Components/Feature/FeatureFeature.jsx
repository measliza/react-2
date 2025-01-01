import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import car from "../img/delivery-car.png";
import credit from "../img/credit-card.png";
import calendar from "../img/calendar.png";

const FeatureFeature = () => {
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
      <div class="container-fluid bg-light bg-icon my-5 py-6">
        <div class="container">
          <div
            class="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 class="display-5 mb-3">
              {" "}
              {isKhmer ? "លក្ខណៈពិសេសរបស់យើង" : "Our Feature"}
            </h1>
            <p>
              {isKhmer
                ? "ទាន់សម័យ ផាសុកភាព និងច្នៃសម្រាប់អ្នក សម្លៀកបំពាក់របស់យើងធ្វើឱ្យគ្រប់ពេលវេលាពិសេស"
                : "Stylish, comfortable, and crafted for you—our clothes make every moment special"}
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={car} alt="" />
                <h4 class="mb-3"> {isKhmer ? "ការដឹកជញ្ជូន" : "Delivery"}</h4>
                <p class="mb-4">
                  {isKhmer
                    ? "ការដឹកជញ្ជូនលឿន គួរឱ្យទុកចិត្តបានដល់មាត់ទ្វាររបស់អ្នក។"
                    : "Fast, reliable delivery right to your doorstep."}
                </p>
                <a
                  class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  {isKhmer ? "អានបន្ថែមទៀត" : "Read More"}
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={credit} alt="" />
                <h4 class="mb-3">{isKhmer ? "ការបង់ប្រាក់" : "Payment"}</h4>
                <p class="mb-4">
                  {isKhmer
                    ? "ជម្រើសបង់ប្រាក់ងាយស្រួល និងសុវត្ថិភាពសម្រាប់អ្នករាល់គ្នា។"
                    : "Secure and easy payment options for everyone."}
                </p>
                <a
                  class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  {isKhmer ? "អានបន្ថែមទៀត" : "Read More"}
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-white text-center h-100 p-4 p-xl-5">
                <img class="img-fluid mb-4" src={calendar} alt="" />
                <h4 class="mb-3">ការបញ្ជូនត្រឡប់មកវិញ</h4>
                <p class="mb-4">
                  {isKhmer
                    ? "ការត្រឡប់មកវិញដោយគ្មានបញ្ហាសម្រាប់សន្តិភាពនៃចិត្តរបស់អ្នក។"
                    : "Hassle-free returns for your peace of mind."}
                </p>
                <a
                  class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href=""
                >
                  {isKhmer ? "អានបន្ថែមទៀត" : "Read More"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFeature;
