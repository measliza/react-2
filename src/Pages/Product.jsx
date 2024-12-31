import React, { useEffect, useState } from "react";
// import ProductNavbar from "../Components/Product/ProductNavbar";
import ProductPageHeader from "../Components/Product/ProductPageHeader";
import ProductProduct from "../Components/Product/ProductProduct";
import ProductFirm from "../Components/Product/ProductFirm";
import ProductTestimonial from "../Components/Product/ProductTestimonial";
import ProductFooter from "../Components/Product/ProductFooter";
import ProductBack from "../Components/Product/ProductBack";
import HomeNavbar from "../Components/Home/HomeNavbar";
import HomeCart from "../Components/Home/HomeCart";

const Product = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      {/* <ProductNavbar /> */}
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <ProductPageHeader />
      <ProductProduct />
      <ProductFirm />
      <ProductTestimonial />
      <ProductFooter />
      <ProductBack />
      {/* <HomeSpinner /> */}
      <HomeNavbar setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      {/* <HomeNavbar /> */}
      {/* <HomeCarousal />
      <HomeAbout />
      <HomeFeature />
      <HomeProduct />
      <HomeFirm />
      <HomeTestimonial />
      <HomeBlog />
      <HomeBack />
      <HomeFooter /> */}
    </div>
  );
};

export default Product;
