import React from "react";
import { FaArrowRight, FaGoogle, FaStar } from "react-icons/fa";
import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
import img4 from "../../assets/images/products/4.png";
import img5 from "../../assets/images/products/5.png";
import img6 from "../../assets/images/products/6.png";

const Products = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-5">
        <h1 className="text-[#FF3811] font-bold text-2xl">Popular Products</h1>
        <h1 className="text-5xl font-bold leading-[55px]">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className=" w-full flex gap-6 flex-wrap justify-between items-center mt-5">
        <div className="card w-[400px] h-[540px] bg-base-100 text-center shadow-md">
          <img src={img1} className=" w-[400px] h-[380px] rounded-lg bg-[#F3F3F3] p-6" />
          <div className="mx-6 mt-8 mb-4 space-y-2 ">
            <div className="flex gap-2 justify-center">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
            </div>
            <h2 className="font-bold text-3xl ">Car Engine Plug</h2>
            <p className="text-2xl font-semibold text-[#FF3811]">
              Price: $ 200.00
            </p>
          </div>
        </div>
        <div className="card w-[400px] h-[540px] bg-base-100 text-center shadow-md">
          <img src={img2} className="w-[400px] h-[380px] p-6 rounded-lg bg-[#F3F3F3] " />
          <div className="mx-6 mt-8 mb-4 space-y-2 ">
            <div className="flex gap-2 justify-center">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
            </div>
            <h2 className="font-bold text-3xl ">Car Air Filter</h2>
            <p className="text-2xl font-semibold text-[#FF3811]">
              Price: $ 200.00
            </p>
          </div>
        </div>
        <div className="card w-[400px] h-[540px] bg-base-100 text-center shadow-md">
          <img src={img3} className=" rounded-lg bg-[#F3F3F3] w-[400px] h-[380px] p-6" />
          <div className="mx-6 mt-8 mb-4 space-y-2 ">
            <div className="flex gap-2 justify-center">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
            </div>
            <h2 className="font-bold text-3xl ">Cools Led Light</h2>
            <p className="text-2xl font-semibold text-[#FF3811]">
              Price: $ 200.00
            </p>
          </div>
        </div>
        <div className="card w-[400px] h-[540px] bg-base-100 text-center shadow-md">
          <img src={img4} className=" rounded-lg bg-[#F3F3F3] w-[400px] h-[380px] p-6" />
          <div className="mx-6 mt-8 mb-4 space-y-2 ">
            <div className="flex gap-2 justify-center">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
            </div>
            <h2 className="font-bold text-3xl ">Car Engine Plug</h2>
            <p className="text-2xl font-semibold text-[#FF3811]">
              Price: $ 200.00
            </p>
          </div>
        </div>
        <div className="card w-[400px] h-[540px] bg-base-100 text-center shadow-md">
          <img src={img5} className=" rounded-lg bg-[#F3F3F3] w-[400px] h-[380px] p-6" />
          <div className="mx-6 mt-8 mb-4 space-y-2 ">
            <div className="flex gap-2 justify-center">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
            </div>
            <h2 className="font-bold text-3xl ">Cools Led Light</h2>
            <p className="text-2xl font-semibold text-[#FF3811]">
              Price: $ 200.00
            </p>
          </div>
        </div>
        <div className="card w-[400px] h-[540px] bg-base-100 text-center shadow-md">
          <img src={img6} className=" rounded-lg bg-[#F3F3F3] w-[400px] h-[380px] p-6" />
          <div className="mx-6 mt-8 mb-4 space-y-2 ">
            <div className="flex gap-2 justify-center">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
            </div>
            <h2 className="font-bold text-3xl ">Cools Led Light</h2>
            <p className="text-2xl font-semibold text-[#FF3811]">
              Price: $ 200.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
