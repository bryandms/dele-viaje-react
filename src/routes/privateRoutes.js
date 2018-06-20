import React from "react";
import { Redirect, Route } from "react-router-dom";
import isAuth from "../utils/isAuth";

const PrivateRoutes = props =>
  isAuth() ? <Route {...props} /> : <Redirect to="/login" />;

export default PrivateRoutes;
