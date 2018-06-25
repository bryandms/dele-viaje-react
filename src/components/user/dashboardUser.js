import React from "react";
import { Grid, Icon, Menu } from "semantic-ui-react";

import Nav from "../partials/nav";
import FavPlaces from "./favPlaces";

class DashboardUser extends React.Component {
  state = {
    activeItem: "Favoritos"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { user } = this.props.user;

    return (
      <Grid padded={false} className="full">
        <Nav user={user} />
        <Grid.Row className="full padding-0">
          <Grid.Column mobile={3} tablet={3} computer={3}>
            <Menu vertical fluid className="full square-radius" inverted>
              <Menu.Item>
                <Menu.Header>{user.username}</Menu.Header>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Lugares turísticos</Menu.Header>

                <Menu.Menu>
                  <Menu.Item
                    name="Favoritos"
                    active={activeItem === "Favoritos"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="heart" />}
                  />
                  <Menu.Item
                    name="Recomendados para ti"
                    active={activeItem === "Recomendados para ti"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="favorite" />}
                  />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Cuenta</Menu.Header>

                <Menu.Menu>
                  <Menu.Item
                    name="Perfil"
                    active={activeItem === "Perfil"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="user" />}
                  />
                  <Menu.Item
                    name="Desactivar Cuenta"
                    active={activeItem === "Desactivar Cuenta"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="dont" />}
                  />
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column mobile={13} tablet={13} computer={13}>
            <FavPlaces places={user.favoritePlaces} user={user} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DashboardUser;
