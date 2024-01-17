import React, { useState } from "react";
import FeaturedProduct from "./FeaturedProduct";
import Servise from "./Servise";
import Testimonials from "./Testimonials";
import { TiPlus, TiMinus } from "react-icons/ti";

function ResponsiveSidebarContent() {
  const [serviseActive, setServiseActive] = useState(false);
  const [testimonialsActive, setTestimonialsActive] = useState(false);
  const [featuredProductActive, setFeaturedProductActive] = useState(false);

  return (
    <div className="mt-5 xl:hidden">
      <div className="md:px-10 bg-white mt-3  ">
        <div
          onClick={() => setServiseActive(!serviseActive)}
          className={`flex cursor-pointer px-3  pt-5 text-xl justify-between  `}
        >
          <h1>Out Servies</h1>
          <p> {serviseActive ? <TiMinus /> : <TiPlus />} </p>
        </div>
        <div
          className={`bg-white mt-5 mx-10 overflow-hidden ${
            serviseActive
              ? "max-h-[700px] transition-max-height duration-300"
              : "max-h-0 transition-max-height duration-300"
          }`}
        >
          <Servise />
        </div>
      </div>
      <div className="md:px-10 bg-white mt-3  ">
        <div
          onClick={() => setTestimonialsActive(!testimonialsActive)}
          className={`flex cursor-pointer px-3 pt-5 text-xl justify-between  `}
        >
          <h1>Testimonials</h1>
          <p> {testimonialsActive ? <TiMinus /> : <TiPlus />} </p>
        </div>
        <div
          className={`bg-white mt-5 mx-10 overflow-hidden ${
            testimonialsActive
              ? "max-h-[300px] transition-max-height duration-300"
              : "max-h-0 transition-max-height duration-300"
          }`}
        >
          <Testimonials />
        </div>
      </div>
      <div className="md:px-10 bg-white mt-3  ">
        <div
          onClick={() => setFeaturedProductActive(!featuredProductActive)}
          className={`flex cursor-pointer px-3 pt-5 text-xl justify-between  `}
        >
          <h1>Feautred Products</h1>
          <p> {featuredProductActive ? <TiMinus /> : <TiPlus />} </p>
        </div>
        <div
          className={`bg-white mt-5 mx-10 overflow-hidden ${
            featuredProductActive
              ? "max-h-[550px] transition-max-height duration-300"
              : "max-h-0 transition-max-height duration-300"
          }`}
        >
          <FeaturedProduct />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSidebarContent;
