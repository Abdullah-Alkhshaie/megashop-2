import React from "react";
import { ImCheckmark } from "react-icons/im";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

import icon1 from "../images/quality-assurance.png";
import icon2 from "../images/delivery-truck.png";
import icon3 from "../images/secure-payment.png";

// const icons = [icon1, icon2, icon3, icon4];

function FirstFooter() {
  return (
    <div className="grid gap-4 px-5 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4  py-10 ">
      <div className="flex text-font gap-5 ">
        <div>
          <img src={icon1} className="w-20" alt="" />
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl">Assured Purchase</h1>
          <p className="text-gray italic font-bold my-2">
            Provide genuine service & store products
          </p>
          <div className="text-md ">
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              100% genuine products
            </p>
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              Deliver items at door
            </p>
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              Free to return products
            </p>
          </div>
        </div>
      </div>

      <div className="flex text-font gap-5 ">
        <div>
          <img src={icon2} className="w-20" alt="" />
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl">Esay To Buy & Return</h1>
          <p className="text-gray italic font-bold my-2">
            Single click to buy & return products
          </p>
          <div className="text-md ">
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              Same day devilery available
            </p>
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              Click to return products
            </p>
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              Quick support links available{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex text-font gap-5 ">
        <div>
          <img src={icon3} className="w-20" alt="" />
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl">Secure Payments</h1>
          <p className="text-gray italic font-bold my-2">
            Accepts all credit & debit cards
          </p>
          <div className="text-md ">
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              100% payment security
            </p>
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              Confirmation authentity
            </p>
            <p className="flex items-center gap-2">
              <ImCheckmark size={15} className="text-yellow-600" />
              delivery items at door{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-font gap-5">
        <div>
          <img src={icon1} className="w-20" alt="" />
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl">Download Center</h1>
          <p className="text-gray italic font-bold my-2">
            Use mobile app and get biggest discounts
          </p>
          <div className="text-md flex gap-5 items-center ">
            <p className="flex items-center gap-2">
              <IoLogoAndroid size={35} className="text-gray" />
              Android{" "}
            </p>
            <p className="flex items-center gap-2">
              <FaApple size={35} className="text-gray" />
              IOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstFooter;
