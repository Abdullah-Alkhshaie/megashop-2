import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../images/slider-01-930x420.jpg";
import slider2 from "../images/slider-02-930x420.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const sliders = [slider1, slider2];

function Hero() {
  const [activeArrow, setActiveArrow] = useState(null);

  const sliderRef = useRef(null);

  const showPrevProduct = () => {
    sliderRef.current.slickPrev();
  };

  const showNextProduct = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full xl:max-w-[930px] relative overflow-hidden mb-10   md:px-10 xl:px-0 ">
      <Slider ref={sliderRef} {...settings}>
        {sliders.map((slide, i) => (
          <img
            onMouseOver={() => setActiveArrow(i)}
            onMouseLeave={() => setActiveArrow(null)}
            className="max-w-full cursor-pointer "
            src={slide}
            alt={`slider-${i + 1}`}
            key={i}
          />
        ))}
      </Slider>

      <IoIosArrowBack
        onClick={showPrevProduct}
        className={`absolute cursor-pointer duration-300 top-[50%] hover:opacity-100 hover:lg:left-14 hover:md:left-10 hover:left-7 hover:bg-font hover:text-white ${
          activeArrow !== null
            ? "lg:left-14 md:left-10 left-7  opacity-100"
            : "opacity-0 lg:left-10 md:left-6 left-4"
        } border-font borde border-4 w-8 h-8 md:w-12 md:h-12 rounded-full `}
      />
      <IoIosArrowForward
        onClick={showNextProduct}
        className={`absolute cursor-pointer duration-300 top-[50%] hover:opacity-100 hover:lg:right-14 hover:md:right-10 hover:right-7 hover:bg-font hover:text-white ${
          activeArrow !== null
            ? "lg:right-14 md:right-10 right-7  opacity-100"
            : "opacity-0 lg:right-10 md:right-6 right-4"
        } border-font borde border-4 w-8 h-8 md:w-12 md:h-12 rounded-full `}
      />
    </div>
  );
}

export default Hero;
