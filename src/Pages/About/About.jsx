import React from "react";
import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-[80px]">
      <div className="hero-content flex-col lg:flex-row items-center space-y-10 gap-[60px]">
        <div className="w-1/2 relative h-[560px]">
          <img
            src={img1}
            className="absolute top-0 left-0 object-cover h-[470px] w-[460px]  max-w-sm rounded-lg"
          />
          <img
            src={img2}
            className="absolute right-0 bottom-0 object-cover border-8 border-white h-[330px] w-[320px]  max-w-sm rounded-lg"
          />
        </div>
        <div className="w-1/2 space-y-10">
          <h1 className="text-[#FF3811] font-bold text-2xl">About Us</h1>
          <h1 className="text-5xl font-bold leading-[55px]">
            We are qualified & of experience in this field
          </h1>
          <p className="text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-xl">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="button-fill">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
