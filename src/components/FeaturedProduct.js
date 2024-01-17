import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProduct } from "../RTK/slice/ProductSlice";
import { Link, useNavigate } from "react-router-dom";

function FeaturedProduct() {
  const dispatch = useDispatch();
  const [hoveredLink, setHoveredLink] = useState(null);

  const navigate = useNavigate();

  const featuredStatu = useSelector((state) => state.products.featuredStatu);
  const featuredProduct = useSelector(
    (state) => state.products.featuredProduct
  );

  useEffect(() => {
    if (featuredStatu === "idle") {
      dispatch(fetchFeaturedProduct());
    }
  }, [dispatch, featuredStatu]);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
    navigate(`/productpage/${featuredProduct.id}`);
  };
  return (
    <div className="">
      {featuredProduct.map((product) => (
        <div
          onMouseEnter={() => setHoveredLink(product.id)}
          onMouseLeave={() => setHoveredLink(null)}
          key={product.id}
          className="flex pb-3  my-5 border-b border-light gap-5"
        >
          <Link to={`/productpage/${product.id}`} onClick={handleClick}>
            <img
              className="w-[100px] border border-light cursor-pointer"
              src={product.img}
              alt={product.name}
            />
          </Link>
          <div className="mb-2">
            <Link to={`/productpage/${product.id}`} onClick={handleClick}>
              <h1
                className={`text-dark text-lg cursor-pointer duration-300 ${
                  hoveredLink === product.id ? "text-font" : ""
                } `}
              >
                {product.name.slice(0, 15)}...
              </h1>
            </Link>
            <div className="flex gap-5 items-center text-center">
              <p className="text-primary  text-lg">${product.newprice}.00</p>
              {product.oldprice && (
                <p className=" text-dark line-through text-sm">
                  ${product.oldprice}.00
                </p>
              )}
            </div>
            <button className="text-dark cursor-pointer duration-300 hover:text-font text-md">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProduct;
