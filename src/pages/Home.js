import React from "react";
import Banners from "../components/Banners";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Manufacturers from "../components/Manufacturers";
import Products from "../components/Products";
import ResponsiveSidebarContent from "../components/ResponsiveSidebarContent";

function Home() {
  return (
    <div className="mx-5 md:mx-0 md:px-10 xl:px-0">
      <Hero />
      <Products />
      <Banners />
      <Blog />
      <Manufacturers />
      <ResponsiveSidebarContent />
    </div>
  );
}

export default Home;
