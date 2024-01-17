import React from "react";
import shippping from "../images/delivery-bike.png";
import support from "../images/customer-service.png";
import saving from "../images/money-bag.png";
import money from "../images/money-back-guarantee.png";
import order from "../images/order.png";
import award from "../images/medal.png";

const servise = [
  {
    img: shippping,
    title: "Free Shipping",
    desc: "Deliver to door",
  },
  {
    img: support,
    title: "24/7 Support",
    desc: "in safe hands",
  },
  {
    img: saving,
    title: "Big Saving",
    desc: "at lowest price",
  },
  {
    img: money,
    title: "Money Back",
    desc: "Easy to return",
  },
  {
    img: order,
    title: "online shopping",
    desc: "a huge branding",
  },
  {
    img: award,
    title: "Award Winner",
    desc: "for best services",
  },
];

function Servise() {
  return (
    <div>
      {" "}
      {servise.map((serv, i) => (
        <div className="flex gap-10 my-10 border-b border-light pb-5" key={i}>
          <img className="w-14" src={serv.img} alt={serv.title} />
          <div>
            <h2 className="text-xl tracking-wide hover:text-primary duration-300 ">
              {serv.title}
            </h2>
            <p className="text-md tracking-wider text-dark">{serv.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Servise;
