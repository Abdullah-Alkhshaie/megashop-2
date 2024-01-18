import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../RTK/slice/CartSlice";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  return (
    <div className=" px-3 xl:mr-3">
      <div className="overflow-x-auto">
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
                Quantity
              </th>
              <th className="py-1 px-3 whitespace-nowrap lg:p-3 border border-gray tracking-wider ">
                Unit Price
              </th>
              <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td className="py-1 px-3 text-center lg:p-3 border border-gray tracking-wider ">
                  <Link
                    className="flex justify-center"
                    to={`/productpage/${product.id}`}
                  >
                    <img
                      src={product.img}
                      className="w-[100px]"
                      alt={product.name}
                    />
                  </Link>
                </td>
                <td className="py-1 px-3 lg:p-3 border whitespace-nowrap lg:whitespace-normal hover:text-font border-gray tracking-wider text-dark">
                  <Link
                    className="flex justify-center"
                    to={`/productpage/${product.id}`}
                  >
                    <p>{product.name}</p>
                  </Link>
                </td>
                <td className="py-1 px-3 whitespace-nowrap lg:p-3 border border-gray tracking-wider ">
                  Product {product.id}
                </td>
                <td className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                  <div className="flex items-center justify-center">
                    <p className="border px-1 w-7 h-7 border-gray">
                      {product.quantity}
                    </p>
                    <button onClick={() => handleRemoveFromCart(product.id)}>
                      <TiDelete className="bg-primary w-7 h-7 text-white" />
                    </button>
                  </div>
                </td>
                <td className="py-1 px-3  whitespace-nowrap lg:p-3 border border-gray font-bold tracking-wider ">
                  ${product.newprice}
                </td>
                <td className="py-1 px-3  lg:p-3 border border-gray font-bold tracking-wider ">
                  ${product.newprice * product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div>
          <h1>What Would You Like To Do Next? </h1>
          <p>
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
