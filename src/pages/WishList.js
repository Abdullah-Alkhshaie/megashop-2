import React from "react";
import { useSelector } from "react-redux";
import WishListTabelItems from "../components/WishListTabelItems";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function WishList() {
  const wishList = useSelector((state) => state.wishList.items);

  return (
    <div className="overflow-x-auto md:px-10 xl:mr-3">
      {wishList.length > 0 ? (
        <table className="w-full table-auto bg-white border border-gray">
          <thead>
            <tr className="border border-gray">
              <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                Image
              </th>
              <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                Product Name
              </th>
              <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                Model
              </th>
              <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                Stock
              </th>
              <th className="py-1 px-3 whitespace-nowrap lg:p-3 border border-gray tracking-wider ">
                Unit Price
              </th>
              <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((product) => (
              <WishListTabelItems key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-4 text-gray-600">
          Your wishlist is empty. Add some products!
        </p>
      )}
      <ToastContainer />
    </div>
  );
}

export default WishList;
