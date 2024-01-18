import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../RTK/slice/CartSlice";

function HomeProducts({ name, id, img, newprice, oldprice }) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0 });
    navigate(`/productpage/${id}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, newprice }));
  };

  return (
    <div
      key={id}
      className={`text-dark border-2 border-light  relative h-fit p-1 w-fit my-2 ${
        hoveredLink === id ? "shadow-md " : "shadow-none"
      } `}
      onMouseEnter={() => setHoveredLink(id)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <div className="mb-10 lg:mb-16 ">
        <Link to={`/productpage/${id}`} onClick={handleClick}>
          <img className="w-[250px] z-0 cursor-pointer" src={img} alt={name} />
        </Link>
      </div>
      <div className="mt-5 flex flex-col lg:mt-10 lead leading-relaxed gap-1">
        <Link to={`/productpage/${id}`} onClick={handleClick}>
          <h2
            className={`capitalize text-lg duration-300 cursor-pointer tracking-wider ${
              hoveredLink === id ? "text-black " : ""
            } `}
          >
            {name.slice(0, 15)}...
          </h2>
        </Link>
        <div className="flex gap-5 text-center ">
          <p className="text-primary font-semibold text-lg">${newprice}.00</p>
          {oldprice && (
            <p className="font-semibold text-dark line-through text-md">
              ${oldprice}.00
            </p>
          )}
        </div>
      </div>
      <div
        className={`flex gap-3 duration-300 absolute top-[62%]  left-5 ${
          hoveredLink === id ? "opacity-1 " : "opacity-0"
        }`}
      >
        <p
          onClick={handleAddToCart}
          className="text-black bg-light rounded-full flex items-center justify-center hover:bg-primary duration-300 hover:text-white cursor-pointer h-10 w-10"
        >
          <LuShoppingCart size={25} />
        </p>
        <p className="text-black bg-light rounded-full flex items-center justify-center hover:bg-primary duration-300 hover:text-white cursor-pointer h-10 w-10">
          <CiHeart size={25} />
        </p>
      </div>
    </div>
  );
}

export default HomeProducts;
