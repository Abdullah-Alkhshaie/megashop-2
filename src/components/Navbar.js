import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Search from "./Search";
import Header from "./Header";

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-primary text-white lg:px-16 py-8 flex flex-col lg:flex-row items-center gap-4 justify-between ${
          isSticky ? "fixed top-0 duration-300 w-full z-50" : "-top-20"
        }`}
        // style={{
        //   transition: "background-color 0.3s ease", // Add transition for smooth color change
        //   top: isSticky ? 0 : undefined,
        // }}
      >
        <div>
          <Link to="/">
            <img src={Logo} className="w-44" alt="logo" />
          </Link>
        </div>
        <Search />
        <div className="flex items-center order ">
          <div className="flex items-center gap-4">
            <FiPhoneCall size={30} />
            <div>
              <p>Call Center</p>
              <p>088-888-8888</p>
            </div>
          </div>
          <span className="w-[1px] mx-5 h-10 bg-dark"></span>
          <div className="flex gap-4">
            <p>Cart</p>
            <Link to="/cart">
              <div className="flex cursor-pointer relative ">
                <LuShoppingCart size={30} />
                <span className="bg-white absolute -right-2 -top-2 flex items-center justify-center text-sm  text-black w-5 h-5 rounded-full">
                  3
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}

export default Navbar;
