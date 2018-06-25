import React from "react";
import Forbidden from "../errors/forbidden";

const Authorization = (allowedRoles, AuthStore) => WrappedComponent =>
  class Authorization extends React.Component {
    render() {
      const { roles } = AuthStore.user;

      function havePermissions() {
        for (let i = 0; i < roles.length; i++) {
          if (allowedRoles.includes(roles[i].name)) return true;
        }
        if (roles.length === 0) return true;
        return false;
      }

      if (havePermissions()) {
        return <WrappedComponent {...this.props} user={AuthStore} />;
      } else {
        return <Forbidden />;
      }
    }
  };

export default Authorization;
