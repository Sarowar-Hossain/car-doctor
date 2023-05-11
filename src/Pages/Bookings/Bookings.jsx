import React, { useContext, useEffect, useState } from "react";
import { authProvider } from "../../Context/AuthContext";

const Bookings = () => {
  const { user } = useContext(authProvider);
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooking(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successful");
          const updateData = booking.filter((order) => order._id !== id);
          setBooking(updateData);
        }
      });
  };

  const handleApprove = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const oldData = booking.filter((order) => order._id !== id);
        const updateData = booking.find((order) => order._id !== id);
        updateData.status = "Approved";
        setBooking([updateData, ...oldData]);
      });
  };

  console.log(booking);
  return (
    <div>
      <h1>this is booking page {booking.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Client</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((book) => (
              <tr>
                <th>
                  <label>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="hover:bg-[#FF3811] hover:text-white rounded-full w-10 h-10"
                    >
                      X
                    </button>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-xl w-28 h-28">
                        <img
                          src={book.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{book.Customer_Name}</div>
                      <div className="text-sm opacity-50">
                        <p>{book.Phone_Number}</p>
                        <p>{book.Client_Message}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">${book.price}</td>
                <td className="font-semibold">{book.data}</td>
                <th>
                  {book.status === "Approved" ? (
                    <button
                      className="button-out"
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handleApprove(book._id)}
                      className="button-fill"
                    >
                      Approved
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
