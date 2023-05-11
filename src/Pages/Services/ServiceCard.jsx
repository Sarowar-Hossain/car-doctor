import React from "react";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, img } = service;
  return (
    <div className="card w-[400px] bg-base-100 shadow text-start">
      <img src={img} className=" rounded-lg px-6 mt-6" />
      <div className="mx-6 mt-4">
        <div className="">
          <h2 className="card-title font-semibold text-3xl ">{title}</h2>
        </div>
        <div className="flex items-center justify-between my-3">
          <p className="text-2xl text-[#FF3811]">Price: ${price}</p>
          <Link to={`/services/${_id}`} className="text-2xl text-[#FF3811]" title="details">
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
