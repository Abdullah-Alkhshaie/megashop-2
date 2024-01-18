import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import SearchResult from "../components/SearchResult";

const ProductList = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const products = useSelector((state) => state.products.allProduct);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const filteredByCategory = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const filteredProducts = searchTerm
    ? filteredByCategory.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredByCategory;

  return (
    <div className="grid lg:max-w-full p-5 mx-10 lg:mx-3 bg-white gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full  ">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className={`text-dark relative  border border-gray  h-fit p-5 w-full ${
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
            className={`flex gap-3 duration-300 absolute top-[67%]  left-5 ${
              hoveredLink === product.id ? "opacity-1 " : "lg:opacity-0"
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
      {searchTerm && <SearchResult results={filteredProducts} />}
    </div>
  );
};

export default ProductList;
