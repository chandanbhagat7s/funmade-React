import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// the need of this component is we are cecking the user is logeed in or not and on the basic of his/her role we are authorizing the routes
export default function Authentication({ allow }) {
  const { loggedin, role } = useSelector((state) => state.auth);
  console.log(loggedin, role, allow);
  return loggedin && [...allow].includes(role) ? (
    // this outlet is the children route which will be accessed on the half of roles
    <Outlet />
  ) : loggedin ? (
    <Navigate to="/denide" />
  ) : (
    <Navigate to="/login" />
  );
}
