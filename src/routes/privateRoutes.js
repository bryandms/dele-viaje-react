import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  let isValid = true;

  try {
    isValid = decode(token);
  } catch (error) {
    return false;
  }

  return isValid;
};

const PrivateRoutes = props =>
  isAuthenticated() ? <Route {...props} /> : <Redirect to="/login" />;

export default PrivateRoutes;
