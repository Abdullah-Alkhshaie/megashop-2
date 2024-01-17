import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../RTK/slice/ProductSlice";
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.allProduct);
  const product =
    allProducts && Array.isArray(allProducts)
      ? allProducts.find((p) => p.id === parseInt(id, 10))
      : null;

  const status = useSelector((state) => state.products.alltStatu);

  useEffect(() => {
    if (!allProducts || allProducts.length === 0) {
      dispatch(fetchAllProduct());
    }
  }, [dispatch, allProducts]);

  if (status === "loading" || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-5 md:px-10">
      <div className="bg-white p-10">
        <div className="flex flex-col gap-5 md:flex-row ">
          <div className="flex-1  mb-5">
            <img
              src={product.img}
              alt={product.name}
              className="w-[500px] border border-gray"
            />
          </div>
          <div className="flex-1 ">
            <h1 className="text-font text-2xl border-b border-gray pb-4 w-full">
              {product.name}
            </h1>
            <table className="my-5  w-full">
              <tbody className="border-b border-gray  pb-4">
                <tr>
                  <td className="text-font text-lg">Brand:</td>
                  <td className="text-dark">{product.brand}</td>
                </tr>
                <tr>
                  <td className="py-2 text-font text-lg">Product Code:</td>
                  <td className="text-dark">Product {product.id}</td>
                </tr>
                <tr>
                  <td className="pb-4 text-font text-lg">Availablity:</td>
                  <td className="pb-4 text-dark">{product.availabilty}</td>
                </tr>
              </tbody>
            </table>
            <div className="border-b pb-6 border-gray">
              {product.oldprice && (
                <p className=" text-dark line-through text-xl">
                  ${product.oldprice}.00
                </p>
              )}

              <p className="text-primary  text-2xl">${product.newprice}.00</p>
            </div>
            <div className="border-b border-gray pb-5">
              <div className="flex  gap-10 mt-5 items-center">
                <p className="text-lg text-dark"> QTY</p>
                <p>1</p>
                <button className="bg-primary flex items-center gap-3 text-white lg:px-6 hover:bg-font px-3 py-2 lg:py-3 text-lg rounded-md">
                  <LuShoppingCart size={25} /> Add To Cart
                </button>
              </div>
              <div>
                <p className="flex items-center gap-2 hover:text-font capitalize text-dark mt-5 text-lg cursor-pointer">
                  <FaHeart size={20} /> add to wish list
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="border-b my-5 pb-5 border-gray">
          <h1 className="text-2xl text-font">Descrption</h1>
        </div>
        <div className="bg-white p-10 text-dark leading-8 text-lg tracking-wider">
          <p>{product.descrption}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
