import React, { useContext } from "react";
import { authProvider } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loader } = useContext(authProvider);

  if (loader) {
    return (
      <div className="flex justify-center my-8">
        <progress className="progress progress-error w-56"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <NavLink to="/signin" replace></NavLink>;
};

export default Private;
