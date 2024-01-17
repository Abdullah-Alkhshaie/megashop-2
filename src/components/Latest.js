import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestProduct } from "../RTK/slice/ProductSlice";

function Latest() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="grid lg:max-w-full p-5   bg-white  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full  ">
        {product.map((product) => (
          <div
            key={product.id}
            className={`text-dark relative rounded-md h-fit p-5 w-full ${
              hoveredLink === product.id ? "shadow-md " : "shadow-none"
            } `}
            onMouseEnter={() => setHoveredLink(product.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div className="mb-10 lg:mb-16 ">
              <img
                className="w-[250px] z-0 cursor-pointer"
                src={product.img}
                alt={product.name}
              />
            </div>
            <div className="mt-5 flex flex-col lg:mt-10 lead leading-relaxed gap-1">
              <h2
                className={`capitalize text-lg duration-300 cursor-pointer tracking-wider ${
                  hoveredLink === product.id ? "text-black " : ""
                } `}
              >
                {product.name.slice(0, 15)}...
              </h2>
              <div className="flex gap-5 text-center ">
                <p className="text-primary font-semibold text-lg">
                  ${product.newprice}.00
                </p>
                {product.oldprice && (
                  <p className="font-semibold text-dark line-through text-md">
                    ${product.oldprice}.00
                  </p>
                )}
              </div>
            </div>
            <div
              className={`flex gap-3 duration-300 absolute top-[62%]  left-5 ${
                hoveredLink === product.id ? "opacity-1 " : "opacity-0"
              }`}
            >
              <p className="text-black bg-light rounded-full flex items-center justify-center hover:bg-primary duration-300 hover:text-white cursor-pointer h-10 w-10">
                <LuShoppingCart size={25} />
              </p>
              <p className="text-black bg-light rounded-full flex items-center justify-center hover:bg-primary duration-300 hover:text-white cursor-pointer h-10 w-10">
                <CiHeart size={25} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
