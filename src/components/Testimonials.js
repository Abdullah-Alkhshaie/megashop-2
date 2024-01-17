import React from "react";
import Slider from "react-slick/lib/slider";

import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";

const testimonials = [
  {
    img: user1,
    name: "John duff",
    job: "Producer",
    testim:
      "Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattis..",
  },
  {
    img: user2,
    name: "John duff",
    job: "Producer",
    testim:
      "Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattis..",
  },
  {
    img: user3,
    name: "John duff",
    job: "Producer",
    testim:
      "Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattis..",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings} className="my-5">
        {testimonials.map((test, i) => (
          <div className="py-5 mb-5" key={i}>
            <div className="flex gap-5 ">
              <img src={test.img} alt={test.name} className="testimonial-img" />
              <div>
                <h1 className="text-xl">{test.name}</h1>
                <p className="text-dark">{test.job}</p>
              </div>
            </div>
            <p className="text-dark my-5">{test.testim}</p>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Testimonials;
