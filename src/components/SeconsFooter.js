import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

function SeconsFooter() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 px-10 gap-10 grid-cols-1">
      <div>
        <h1 className="text-font text-xl lg:text-2xl my-5 cursor-pointer ">
          About Store
        </h1>
        <p className="text-dark">
          At vero eos et accusamus et iusto odio dignissimos ducimus, duis
          faucibus enim vitae nunc molestie.
        </p>
      </div>
      <div>
        <h1 className="text-font text-xl lg:text-2xl my-5 cursor-pointer ">
          Extras
        </h1>
        <ul>
          <li className="text-dark hover:text-primary cursor-pointer">
            Brands
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Gift Certificates
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Affiliates
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Contact Us
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Specials{" "}
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-font text-xl lg:text-2xl my-5 cursor-pointer ">
          My Account
        </h1>
        <ul>
          <li className="text-dark hover:text-primary cursor-pointer">
            My Account
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Order History
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Wish List
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Newsletter
          </li>
          <li className="text-dark hover:text-primary cursor-pointer">
            Returns{" "}
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-font text-xl lg:text-2xl my-5 cursor-pointer ">
          Store Information
        </h1>
        <div>
          <p className="text-dark flex gap-4 items-center mb-3 ">
            <FaLocationDot size={25} /> My Company, 42 Puffin street 12345
            Puffinville France
          </p>

          <p className="text-dark flex gap-4 items-center mb-3 ">
            <IoIosCall size={25} /> 0123-456-789
          </p>
          <p className="text-dark flex gap-4 items-center mb-3 hover:text-primary cursor-pointer">
            {" "}
            <CiMail size={25} /> sales@yourcompany.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeconsFooter;
