import React from "react";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../RTK/slice/WishListSlice";
import { LuShoppingCart } from "react-icons/lu";
import { addToCart } from "../RTK/slice/CartSlice";
import { toast } from "react-toastify";

function WishListTabelItems({
  id,
  name,
  img,
  newprice,
  oldprice,
  availabilty,
}) {
  const dispatch = useDispatch();
  const handleRemoveWishList = (productId) => {
    dispatch(removeFromWishList({ id: productId }));
    toast.error("Item removed from wishlist");
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, newprice, quantity: 1 }));
    toast.success("Item added to cart");
  };
  return (
    <tr key={id}>
      <td className="py-1 px-3 text-center lg:p-3 border border-gray tracking-wider ">
        <Link className="flex justify-center" to={`/productpage/${id}`}>
          <img src={img} className="w-[100px]" alt={name} />
        </Link>
      </td>
      <td className="py-1 px-3 lg:p-3 border whitespace-nowrap lg:whitespace-normal hover:text-font border-gray tracking-wider text-dark">
        <Link className="flex justify-center" to={`/productpage/${id}`}>
          <p>{name}</p>
        </Link>
      </td>
      <td className="py-1 px-3 whitespace-nowrap lg:p-3 border border-gray tracking-wider ">
        Product {id}
      </td>
      <td className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
        {availabilty}
      </td>
      <td className="py-1 px-3  whitespace-nowrap lg:p-3 border border-gray  tracking-wider ">
        <span className="text-dark mr-2">${newprice}</span>
        {oldprice && (
          <span className="text-dark line-through">${oldprice}</span>
        )}
      </td>
      <td className="py-1 px-3   lg:p-3 border border-gray font-bold tracking-wider ">
        <div className="flex gap-1 justify-center">
          <TiDelete
            onClick={() => handleRemoveWishList(id)}
            size={25}
            className="text-white hover:bg-font p-1 w-7 h-7 cursor-pointer bg-primary"
          />
          <LuShoppingCart
            onClick={handleAddToCart}
            className="text-white p-1 hover:bg-font w-7 h-7 cursor-pointer bg-primary"
          />
        </div>
      </td>
    </tr>
  );
}

export default WishListTabelItems;
