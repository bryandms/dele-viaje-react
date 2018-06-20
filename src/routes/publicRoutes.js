import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "../routes/privateRoutes";
import Home from "../components/home/home";
import Login from "../components/auth/login";
import Logout from "../components/auth/logout";
import Register from "../components/auth/register";
import NotFound from "../components/errors/notFound";
import Authorization from "../components/auth/authorization";

import "semantic-ui-css/semantic.min.css";
import "../css/main.css";

const Admin = Authorization(["admin"]);
const User = Authorization(["admin", "user"]);

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/register" exact component={Register} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
