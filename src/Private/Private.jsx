import React, { useContext } from "react";
import { authProvider } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loader } = useContext(authProvider);
  const location = useLocation();

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
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default Private;
