import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { addToCart } from "../RTK/slice/CartSlice";
import SearchResult from "../components/SearchResult";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToWishList } from "../RTK/slice/WishListSlice";

const ProductList = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const dispatch = useDispatch();

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

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  const handleAddToCart = (productId) => {
    const product = filteredProducts.find((p) => p.id === productId);
    if (product) {
      const { id, name, img, newprice } = product;
      dispatch(addToCart({ id, name, img, newprice, quantity: 1 }));
      toast.success("Item added to the cart!");
    }
  };

  const handleAddToWishList = (productId) => {
    const product = filteredProducts.find((p) => p.id === productId);
    if (product) {
      const { id, name, img, newprice, oldprice, availabilty } = product;
      dispatch(
        addToWishList({ id, name, img, newprice, oldprice, availabilty })
      );
      toast.success("Item added to the wish list!");
    }
  };
  return (
    <div className="grid lg:max-w-full p-5 mx-10 lg:mx-3 bg-white gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full  ">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className={`text-dark border-2 border-light  relative h-fit p-1 w-fit my-2 ${
            hoveredLink === product.id ? "shadow-md " : "shadow-none"
          } `}
          onMouseEnter={() => setHoveredLink(product.id)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className="mb-10 lg:mb-16 ">
            <Link to={`/productpage/${product.id}`} onClick={handleClick}>
              <img
                className="w-[250px] z-0 cursor-pointer"
                src={product.img}
                alt={product.name}
              />
            </Link>
          </div>
          <div className="mt-5 flex flex-col lg:mt-10 lead leading-relaxed gap-1">
            <Link to={`/productpage/${product.id}`} onClick={handleClick}>
              <h2
                className={`capitalize text-lg duration-300 cursor-pointer tracking-wider ${
                  hoveredLink === product.id ? "text-black " : ""
                } `}
              >
                {product.name.slice(0, 15)}...
              </h2>
            </Link>
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
            className={`flex gap-3 duration-300 absolute top-[68%]  left-5 ${
              hoveredLink === product.id ? "opacity-1 " : "lg:opacity-0"
            }`}
          >
            <p
              onClick={() => handleAddToCart(product.id)}
              className="text-black bg-light rounded-full flex items-center justify-center hover:bg-primary duration-300 hover:text-white cursor-pointer h-10 w-10"
            >
              <LuShoppingCart size={25} />
            </p>
            <p
              onClick={() => handleAddToWishList(product.id)}
              className="text-black bg-light rounded-full flex items-center justify-center hover:bg-primary duration-300 hover:text-white cursor-pointer h-10 w-10"
            >
              <CiHeart size={25} />
            </p>
          </div>
        </div>
      ))}
      {searchTerm && <SearchResult results={filteredProducts} />}
      <ToastContainer />
    </div>
  );
};

export default ProductList;
