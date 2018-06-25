import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "../routes/privateRoutes";
import Home from "../components/home/home";
import Login from "../components/auth/login";
import Logout from "../components/auth/logout";
import Register from "../components/auth/register";
import NotFound from "../components/errors/notFound";
import Authorization from "../components/auth/authorization";
import DashboardUser from "../components/user/dashboardUser";
import DashboardAdmin from "../components/admin/dashboardAdmin";

import AuthStore from "../store/auth";
import "semantic-ui-css/semantic.min.css";
import "../css/main.css";

const Admin = Authorization(["admin"], AuthStore);
const User = Authorization(["", "admin", "user"], AuthStore);

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={User(Home)} />
      <Route path="/login" exact component={User(Login)} />
      <PrivateRoute path="/logout" exact component={User(Logout)} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dashboard" exact component={User(DashboardUser)} />
      <PrivateRoute path="/admin/dashboard" exact component={Admin(DashboardAdmin)} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
