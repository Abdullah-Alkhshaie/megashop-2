import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import Servise from "./Servise";
import Categories from "./Categories";
import leftBanner from "../images/left-banner-1.jpg";
import FeaturedProduct from "./FeaturedProduct";

function Sidebar() {
  return (
    <div className="lg:px-10 h-full  hidden xl:block  w-[400px] ">
      <div className="w-[350px] p-5 bg-white">
        <h1 className="text-2xl tracking-wider">Categories</h1>
        <Categories />
      </div>
      <div className="w-[350px] mt-[1px] p-2 bg-white">
        <Link to="/">
          <img
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
            src={leftBanner}
            className="w-full cursor-pointer"
            alt="leftBnner"
          />
        </Link>
      </div>
      <div className="w-[350px] mt-[2px] p-5 bg-white">
        <Servise />
      </div>
      <div className="bg-white w-[350px] mt-[1px]  p-5">
        <Testimonials />
      </div>
      <div className="bg-white w-[350px] mt-[1px] p-5">
        <h1 className="text-2xl">Featured</h1>
        <FeaturedProduct />
      </div>
    </div>
  );
}

export default Sidebar;
