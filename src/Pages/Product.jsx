import React from "react";
// import ProductNavbar from "../Components/Product/ProductNavbar";
import ProductPageHeader from "../Components/Product/ProductPageHeader";
import ProductProduct from "../Components/Product/ProductProduct";
import ProductFirm from "../Components/Product/ProductFirm";
import ProductTestimonial from "../Components/Product/ProductTestimonial";
import ProductFooter from "../Components/Product/ProductFooter";
import ProductBack from "../Components/Product/ProductBack";
import HomeNavbar from "../Components/Product/HomeNavbar";

const Product = () => {
  return (
    <div>
      {/* <ProductNavbar /> */}
      <HomeNavbar />
      <ProductPageHeader />
      <ProductProduct />
      <ProductFirm />
      <ProductTestimonial />
      <ProductFooter />
      <ProductBack />
    </div>
  );
};

export default Product;
