import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { authProvider } from "../../Context/AuthContext";

const Header = () => {
  const { user, userSignOut } = useContext(authProvider);
  // const { uid, displayName } = user;
  const handleSignOut = () => {
    userSignOut()
      .then(result=>{
        console.log(result);
        localStorage.removeItem('car-access-token')
      })
      .catch((error) => console.log(error.message));
  };
  // console.log(displayName, uid);
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost normal-case text-xl">
          About
        </Link>
        <Link to="/services" className="btn btn-ghost normal-case text-xl">
          Services
        </Link>
        <Link to="blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </Link>
        <Link to="/contact" className="btn btn-ghost normal-case text-xl">
          Contact
        </Link>
        {user ? (
          <>
            <Link to="/bookings" className="btn btn-ghost normal-case text-xl">
              Bookings
            </Link>
            <h1
              className="btn btn-ghost normal-case text-xl"
              title={user?.displayName}
            >
              Profile
            </h1>
            <Link
              onClick={handleSignOut}
              className="btn btn-ghost normal-case text-xl"
            >
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/signin" className="btn btn-ghost normal-case text-xl">
            Sign In
          </Link>
        )}
      </div>

      <div className="navbar-end">
        <button className="button-out">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
