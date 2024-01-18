import React, { useEffect, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import CartTableItems from "../components/CartTableItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart.items);

  const [activeCoupon, setActiveCoupon] = useState(false);
  const [activeGiftCard, setActiveGiftCard] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [giftInput, setGiftInput] = useState("");
  const [giftMessage, setGiftMessage] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [ecoTax, setEcoTax] = useState(0);
  const [VAT, setVAT] = useState(0);
  const [total, setTotal] = useState(0);

  const handleApplyCoupon = () => {
    if (couponInput === "49283492") {
      setCouponMessage("Coupon applied successfully!");
    } else {
      setCouponMessage(
        "Warning: Coupon is either invalid, expired or reached its usage limit!"
      );
    }
  };
  const handleGiftCoupon = () => {
    if (couponInput === "49283492") {
      // Coupon code matches, you can apply the coupon logic here
      setGiftMessage("Coupon applied successfully!");
    } else {
      // Coupon code does not match
      setGiftMessage(
        " Warning: Gift Certificate is either invalid or the balance has been used up!"
      );
    }
  };

  useEffect(() => {
    const calculatedSubTotal = cartItems.reduce(
      (accumulator, item) => accumulator + item.newprice * item.quantity,
      0
    );
    setSubTotal(calculatedSubTotal);

    const calculatedEcoTax = -2.0;
    setEcoTax(calculatedEcoTax);

    const calculatedVAT = 0.2 * calculatedSubTotal;
    setVAT(calculatedVAT);

    const calculatedTotal =
      calculatedSubTotal + calculatedEcoTax + calculatedVAT;
    setTotal(calculatedTotal);
  }, [cartItems]);

  return (
    <div className="md:px-10 xl:mr-3">
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
              <CartTableItems key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 px-3">
        <div>
          <h1 className="text-xl">What Would You Like To Do Next? </h1>
          <p className="text-dark text-lg">
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="flex-1">
            <div className="">
              <div className="w-full flex bg-white border border-gray text-dark px-5 py-3 justify-between">
                <p>Use Coupon Code</p>
                <p
                  onClick={() => {
                    setActiveCoupon(!activeCoupon);
                    setActiveGiftCard(false);
                  }}
                  className="cursor-pointer"
                >
                  <IoMdArrowDropdown size={25} />
                </p>
              </div>
              <div
                className={`border overflow-hidden border-gray text-dark px-5 py-2 bg-white ${
                  activeCoupon
                    ? "h-[180px]  md:h-[150px] opacity-1 duration-300"
                    : "h-0 opacity-0 duration-300"
                }`}
              >
                <p>Enter your coupon here</p>
                <div className="mt-2 w-full p-3 flex">
                  <input
                    type="text"
                    className="border outline-none w-[130px] border-gray px-3 py-1 "
                    placeholder="Enter your coupon here"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-3 py-1 border flex-2 border-primary bg-primary hover:bg-font text-white"
                  >
                    Apply Coupon
                  </button>
                </div>
                {couponMessage && (
                  <p className="text-red-500 bg-[#f2dede] p-2">
                    {couponMessage}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div className="w-full flex bg-white border border-gray text-dark px-5 py-3 justify-between">
                <p>Use Gift Card</p>
                <p
                  onClick={() => {
                    setActiveGiftCard(!activeGiftCard);
                    setActiveCoupon(false);
                  }}
                  className="cursor-pointer"
                >
                  <IoMdArrowDropdown size={25} />
                </p>
              </div>
              <div
                className={`border overflow-hidden border-gray text-dark px-5 py-2 bg-white ${
                  activeGiftCard
                    ? "h-[180px]  md:h-[150px] opacity-1 duration-300"
                    : "h-0 opacity-0 duration-300"
                }`}
              >
                <p>Enter your gift certificate code here</p>
                <div className="mt-2 w-full p-3 flex ">
                  <input
                    type="text"
                    className="border outline-none flex-1 w-[100px] border-gray px-3 py-1 "
                    placeholder="Enter your gift certificate code here"
                    value={giftInput}
                    onChange={(e) => setGiftInput(e.target.value)}
                  />
                  <button
                    onClick={handleGiftCoupon}
                    className="px-3 py-1 border flex-2 border-primary bg-primary hover:bg-font text-white"
                  >
                    Apply Gift Certificate
                  </button>
                </div>
                {giftMessage && (
                  <p className="text-red-500 bg-[#f2dede] p-2">{giftMessage}</p>
                )}
              </div>
            </div>
          </div>
          <div className=""></div>
          <table>
            <tbody>
              <tr>
                <td className="border border-[#d2b3b3] p-3">Sub-Total:</td>
                <td className="border border-[#d2b3b3] p-3 font-bold">
                  ${subTotal.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border border-[#d2b3b3] p-3">
                  Eco-Tax (-2.00):
                </td>
                <td className="border border-[#d2b3b3] p-3 font-bold">
                  ${ecoTax.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border border-[#d2b3b3] p-3">VAT (20%):</td>
                <td className="border border-[#d2b3b3] p-3 font-bold">
                  ${VAT.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border border-[#d2b3b3] p-3">Total:</td>
                <td className="border border-[#d2b3b3] p-3 font-bold">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-5 text-white justify-between">
          <Link to="/">
            <button className="bg-primary hover:bg-font px-3 py-1">
              Continue Shopping
            </button>
          </Link>
          <button className="bg-primary hover:bg-font px-2 py-1">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
