import React from "react";
import { removeFromCart } from "../RTK/slice/CartSlice";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function CartTableItems({ id, img, name, newprice, quantity }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
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
        <div className="flex items-center justify-center">
          <p className="border px-1 w-7 h-7 border-gray">{quantity || 0}</p>
          <button onClick={() => handleRemoveFromCart(id)}>
            <TiDelete className="bg-primary w-7 h-7 text-white" />
          </button>
        </div>
      </td>
      <td className="py-1 px-3  whitespace-nowrap lg:p-3 border border-gray font-bold tracking-wider ">
        ${newprice}
      </td>
      <td className="py-1 px-3  lg:p-3 border border-gray font-bold tracking-wider ">
        ${newprice * quantity}
      </td>
    </tr>
  );
}

export default CartTableItems;
