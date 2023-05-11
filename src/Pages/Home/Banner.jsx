import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="h-[600px] rounded-lg">
      <div className="carousel w-full">
        <div id="slide1" className="bg-black carousel-item relative w-full rounded-lg">
          <img
            src={img1}
            className="w-full rounded-lg opacity-50 scale-x-[-1] h-[600px] object-right-top object-cover"
          />
          <div className="absolute gap-4 justify-between w-full transform -translate-y-1/2 left-20 bottom-1/2">
            <div className="absolute right-22 bottom-[-165px] w-full">
              <h1 className="text-7xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white text-2xl my-8">
                There are many variations of passages of available
              </p>
              <button className="button-fill me-5">Discover More</button>
              <button className="button-otext ">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-4 justify-between opacity-70  transform -translate-y-1/2 right-10 bottom-0">
            <a href="#slide4" className="button-out">
              ❮
            </a>

            <a href="#slide2" className="button-out">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="bg-black carousel-item relative w-full rounded-lg">
          <img
            src={img2}
            className="w-full rounded-lg scale-x-[-1] opacity-50 h-[600px] object-right-top object-cover"
          />
          <div className="absolute gap-4 justify-between w-full transform -translate-y-1/2 left-20 bottom-1/2">
            <div className="absolute right-22 bottom-[-165px] w-full">
              <h1 className="text-7xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white text-2xl my-8">
                There are many variations of passages of available
              </p>
              <button className="button-fill me-5">Discover More</button>
              <button className="button-otext ">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-4 justify-between transform -translate-y-1/2 right-10 bottom-0">
            <a href="#slide1" className="button-out">
              ❮
            </a>
            <a href="#slide3" className="button-out">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="bg-black carousel-item relative w-full rounded-lg">
          <img
            src={img3}
            className="opacity-50 rounded-lg scale-x-[-1] w-full h-[600px] object-cover"
          />
          <div className="absolute gap-4 justify-between w-full transform -translate-y-1/2 left-20 bottom-1/2">
            <div className="absolute right-22 bottom-[-165px] w-full">
              <h1 className="text-7xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white text-2xl my-8">
                There are many variations of passages of available
              </p>
              <button className="button-fill me-5">Discover More</button>
              <button className="button-otext ">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-4 justify-between transform -translate-y-1/2 right-10 bottom-0">
            <a href="#slide2" className="button-out">
              ❮
            </a>
            <a href="#slide4" className="button-out">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="bg-black carousel-item relative w-full rounded-lg">
          <img
            src={img4}
            className="opacity-50 rounded-lg scale-x-[-1] w-full h-[600px] object-cover"
          />
          <div className="absolute gap-4 justify-between w-full transform -translate-y-1/2 left-20 bottom-1/2">
            <div className="absolute right-22 bottom-[-165px] w-full">
              <h1 className="text-7xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white text-2xl my-8">
                There are many variations of passages of available
              </p>
              <button className="button-fill me-5">Discover More</button>
              <button className="button-otext ">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex gap-4 justify-between transform -translate-y-1/2 right-10 bottom-0">
            <a href="#slide3" className="button-out">
              ❮
            </a>
            <a href="#slide1" className="button-out">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
