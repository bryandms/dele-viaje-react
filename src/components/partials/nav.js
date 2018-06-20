import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import isAuth from "../../utils/isAuth";

export default class MenuExampleSecondaryPointing extends Component {
  render() {
    const style = { height: "60px" };

    return (
      <Menu pointing secondary inverted fluid attached="top" style={style}>
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
