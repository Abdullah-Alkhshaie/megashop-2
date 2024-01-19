import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const wishList = useSelector((state) => state.wishList.items);

  const wishListLenght = wishList.length;

  return (
    <div className="w-full flex-col md:flex-row py-2 bg-red-600 flex md:px-5 lg:px-16 items-center text-white justify-between">
      <p className="text-sm mb-2">
        Wants to explore Upcoming Deals on Weekends?
      </p>
      <div className="flex items-center gap-10">
        <Link to="/wishlist">
          <button className="cursor-pointer">
            Wish List ({wishListLenght})
          </button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
