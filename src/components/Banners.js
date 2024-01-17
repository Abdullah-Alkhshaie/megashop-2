import React from "react";
import banner1 from "../images/subbanner-1.jpg";
import banner3 from "../images/subbanner-2.jpg";
import banner2 from "../images/subbanner-3.jpg";

const banner = [banner1, banner2, banner3];
function Banners() {
  return (
    <div className="bg-white xl:mr-10 mt-5 flex gap-5 p-5 ">
      {banner.map((banner, i) => (
        <div
          key={i}
          className="w-full relative before:absolute before:top-[-10px] before:left-[-120%] before:rotate-12 before:w-[50%] before:opacity-20 before:h-[120%] before:bg-[#f3f3f3] before:tralnslate-x-[90deg]  cursor-pointer overflow-hidden before:duration-[1s] hover:before:left-[120%] "
        >
          <img className="w-full  " src={banner} alt={`banner ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Banners;
