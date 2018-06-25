import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import isAuth from "../../utils/isAuth";

export default class Nav extends Component {
  render() {
    const menuStyle = { height: "60px", background: "black" };

    return (
      <Menu pointing secondary inverted fluid attached="top" style={menuStyle}>
        <Menu.Item name="Dele Viaje">
          <Link to="/">Dele Viaje</Link>
        </Menu.Item>

        {isAuth() ? (
          <Menu.Menu position="right">
            <Menu.Item name="Cerrar Sesión">
              <Link to="/logout">Cerrar Sesión</Link>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item name="Iniciar Sesión">
              <Link to="/login">Iniciar Sesión</Link>
            </Menu.Item>

            <Menu.Item name="Crear Cuenta">
              <Link to="/register">Crear Cuenta</Link>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}
