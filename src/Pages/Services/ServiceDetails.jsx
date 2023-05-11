import React, { useContext, useEffect } from "react";
import banner from "../../assets/images/banner/4.jpg";
import { useLoaderData } from "react-router-dom";
import { authProvider } from "../../Context/AuthContext";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(authProvider);
  const { title, price, description, service_id, img } = data;

  console.log(data);

  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const clientMessage = e.target.client_message.value;
    const time = e.target.time.value;
    const date = e.target.date.value;

    const order = {
      Customer_Name: name,
      email: email,
      Phone_Number: number,
      Client_Message: clientMessage,
      photo: img,
      price: price,
      time: time,
      data: date 
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="bg-black carousel-item relative w-full rounded-lg h-[300px]">
        <img
          src={banner}
          className="w-full h-[300px] rounded-lg opacity-50 scale-x-[-1] object-right-top object-cover"
        />
        <div className="absolute gap-4 justify-between w-full transform -translate-y-1/2 left-20 bottom-1/2">
          <div className="absolute right-22 bottom-[-30px] w-full">
            <h1 className="text-5xl font-bold text-white ">Check Out</h1>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center my-8">
        Book Service : {title}
      </h1>
      <div>
        <form onSubmit={handleBooking} className="card-body">
          <div className="form-control">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className=" w-full flex space-x-4">
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered block w-1/2"
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Your Number"
              className="input input-bordered w-1/2"
              required
            />
          </div>
          <div className=" w-full flex space-x-4">
            <input
              type="date"
              name="date"
              placeholder="Your Number"
              className="input input-bordered w-1/2"
              required
            />
            <input
              type="time"
              name="time"
              placeholder="Size"
              className="input input-bordered w-1/2"
              required
            />
          </div>
          <div className="">
            <input
              type="text"
              name="client_message"
              placeholder="Your Message"
              className="input input-info p-0 h-[100px] w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="button-fill">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
