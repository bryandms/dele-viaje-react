import React from "react";
import Forbidden from "../errors/forbidden";

const Authorization = allowedRoles => WrappedComponent =>
  class Authorization extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          username: "",
          role: ""
        }
      };
    }

    render() {
      const { role } = this.state.user;
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} user={this.state.user} />;
      } else {
        return <Forbidden />;
      }
    }
  };

export default Authorization;
