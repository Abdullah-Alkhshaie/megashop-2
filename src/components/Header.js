import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Categories from "./Categories";

function Header() {
  const [activeBar, setActiveBar] = useState(false);

  return (
    <div className="xl:hidden rounded-t-lg items-center cursor-pointer">
      <div className="bg-primary md:px-10 w-full b">
        <div
          onClick={() => setActiveBar(!activeBar)}
          className={`flex text-white justify-between rounded-t-lg bg-red-600 px-5 py-2`}
        >
          <h1>Categories </h1>
          <FaBars size={25} />
        </div>
      </div>
      <div
        className={`bg-white mt-5 mx-10 overflow-hidden ${
          activeBar
            ? "max-h-96 transition-max-height duration-300"
            : "max-h-0 transition-max-height duration-300"
        }`}
      >
        <Categories />
      </div>
    </div>
  );
}

export default Header;
