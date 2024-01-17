import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import brand1 from "../images/brand-logo-01-140x100.png";
import brand2 from "../images/brand-logo-02-140x100.png";
import brand3 from "../images/brand-logo-03-140x100 (1).png";
import brand4 from "../images/brand-logo-04-140x100.png";
import brand5 from "../images/brand-logo-05-140x100.png";
import brand6 from "../images/brand-logo-06-140x100.png";
import brand7 from "../images/brand-logo-07-140x100.png";
import brand8 from "../images/brand-logo-08-140x100.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

function Manufacturers() {
  const sliderRef = useRef();

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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isXLScreen = window.innerWidth >= 1280;

  return (
    <>
      <div className="py-10 realtive flex justify-between">
        <h1 className="text-xl md:text-2xl cursor-pointer">Manufacturers</h1>
        <div className="flex xl:hidden ">
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
      {isXLScreen ? (
        <div className="grid mr-5 lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1 p-5 bg-white h-full">
          {brands.map((brand, i) => (
            <div className="" key={i}>
              <img src={brand} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <Slider ref={sliderRef} className="bg-white p-5" {...sliderSettings}>
          {brands.map((brand, i) => (
            <div className="" key={i}>
              <img src={brand} alt="" />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}

export default Manufacturers;
