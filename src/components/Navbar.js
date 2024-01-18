import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Search from "./Search";
import ResponsiveCategories from "./ResponsiveCategories";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../RTK/slice/CartSlice";

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const handleAddToCart = () => {
    const productToAdd = {
      id: 1,
      name: "Example",
      img: "example.jpg",
      newprice: 10,
      quantity: 1,
    };
    dispatch(addToCart(productToAdd));
  };

  return (
    <>
      <div
        className={`bg-primary text-white lg:px-16 py-8 flex flex-col lg:flex-row items-center gap-4 justify-between ${
          isSticky
            ? "lg:fixed lg:top-0 lg:duration-300 lg:w-full lg:z-50"
            : "lg:-top-20"
        }`}
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
                <span className="bg-white absolute -right-2 -top-2 flex items-center justify-center text-sm text-black w-5 h-5 rounded-full">
                  {isNaN(totalQuantity) ? 0 : totalQuantity}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ResponsiveCategories />
    </>
  );
}

export default Navbar;
