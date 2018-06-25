import React from "react";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  props.user.role = [];
  localStorage.removeItem("token");
  return <Redirect to="/login" />;
};

export default Logout;
