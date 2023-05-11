import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-[130px]">
      <div className="text-center space-y-5">
        <h1 className="text-[#FF3811] font-bold text-2xl">Service</h1>
        <h1 className="text-5xl font-bold leading-[55px]">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className=" w-full flex gap-6 flex-wrap justify-between items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
