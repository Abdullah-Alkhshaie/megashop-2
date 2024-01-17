import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import {
  fetchFeaturedProduct,
  fetchLatestProduct,
  fetchSpecialProduct,
} from "../RTK/slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import HomeProducts from "./HomeProducts";

function Products() {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("featured");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const featureStatu = useSelector((state) => state.products.featuredStatu);
  const feature = useSelector((state) => state.products.featuredProduct);

  useEffect(() => {
    if (featureStatu === "idle") {
      dispatch(fetchFeaturedProduct());
    }
  }, [dispatch, featureStatu]);

  const latestStatu = useSelector((state) => state.products.latestStatu);
  const latest = useSelector((state) => state.products.latestProduct);

  useEffect(() => {
    if (latestStatu === "idle") {
      dispatch(fetchLatestProduct());
    }
  }, [dispatch, latestStatu]);

  const specialStatu = useSelector((state) => state.products.specialStatu);
  const special = useSelector((state) => state.products.specialProduct);

  useEffect(() => {
    if (specialStatu === "idle") {
      dispatch(fetchSpecialProduct());
    }
  }, [dispatch, specialStatu]);

  const sliderRef = React.useRef();

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const sliderSettings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isXLScreen = window.innerWidth >= 1280;

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start relative gap-10 mb-10 text-font">
        <button
          onClick={() => handleTabChange("featured")}
          className={`text-xl md:text-2xl duration-300 outline-none cursor-pointer hover:text-primary ${
            activeTab === "featured" && "text-primary"
          }`}
        >
          Featured
        </button>
        <button
          onClick={() => handleTabChange("latest")}
          className={`text-xl md:text-2xl duration-300 outline-none cursor-pointer hover:text-primary ${
            activeTab === "latest" && "text-primary"
          }`}
        >
          Latest
        </button>
        <button
          onClick={() => handleTabChange("special")}
          className={`text-xl md:text-2xl duration-300 outline-none cursor-pointer hover:text-primary ${
            activeTab === "special" && "text-primary"
          }`}
        >
          Special
        </button>
        <div className="text-center flex absolute -top-5 md:top-0 right-10  xl:hidden mt-4">
          <button
            onClick={handlePrev}
            className="hover:text-primary duration-300"
          >
            <IoIosArrowBack size={30} />
          </button>
          <span className="w-[1px] bg-dark h-10 mx-5 "></span>
          <button
            onClick={handleNext}
            className="hover:text-primary duration-300"
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
      <div>
        {(activeTab === "featured" ||
          activeTab === "latest" ||
          activeTab === "special") &&
        isXLScreen ? (
          <div className="grid mr-2 gap-1  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 bg-white h-full ">
            {activeTab === "featured" &&
              feature.map((product) => (
                <div key={product.id} className="px-2">
                  <HomeProducts {...product} />
                </div>
              ))}
            {activeTab === "latest" &&
              latest.map((product) => (
                <div key={product.id} className="px-2">
                  <HomeProducts {...product} />
                </div>
              ))}
            {activeTab === "special" &&
              special.map((product) => (
                <div key={product.id} className="px-2">
                  <HomeProducts {...product} />
                </div>
              ))}
          </div>
        ) : (
          <Slider ref={sliderRef} {...sliderSettings}>
            {activeTab === "featured" &&
              feature.map((product) => (
                <div key={product.id} className="px-10 lg:px-2 bg-white">
                  <HomeProducts {...product} />
                </div>
              ))}
            {activeTab === "latest" &&
              latest.map((product) => (
                <div key={product.id} className="px-10 lg:px-2 bg-white">
                  <HomeProducts {...product} />
                </div>
              ))}
            {activeTab === "special" &&
              special.map((product) => (
                <div key={product.id} className="px-10 lg:px-2 bg-white">
                  <HomeProducts {...product} />
                </div>
              ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Products;
