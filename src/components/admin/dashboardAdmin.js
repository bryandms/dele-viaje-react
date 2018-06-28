import React from "react";
import { Grid, Icon, Menu } from "semantic-ui-react";
import { Query } from "react-apollo";

import Nav from "../partials/nav";
import Place from "./places/index";
import Service from "./services/index";
import UserList from "./users/userList";
import queries from "../../utils/queries";

class DashboardAdmin extends React.Component {
  state = {
    activeItem: "Lugares turísticos"
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
                <Menu.Header>Principal</Menu.Header>

                <Menu.Menu>
                  <Menu.Item
                    name="Lugares turísticos"
                    active={activeItem === "Lugares turísticos"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="marker" />}
                  />
                  <Menu.Item
                    name="Servicios"
                    active={activeItem === "Servicios"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="handshake" />}
                  />
                  <Menu.Item
                    name="Usuarios"
                    active={activeItem === "Usuarios"}
                    onClick={this.handleItemClick}
                    icon={<Icon disabled name="users" />}
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
            {activeItem === "Lugares turísticos" ? <Place /> : null}
            {activeItem === "Servicios" ? <Service /> : null}
            {activeItem === "Usuarios" ? (
              <Query query={queries.query.allUsers}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading</p>;
                  if (error) return "error";
                  return <UserList users={data.allUsers} />;
                }}
              </Query>
            ) : null}
            {activeItem === "Perfil" ? "Perfil" : null}
            {activeItem === "Desactivar Cuenta" ? "Desactivar Cuenta" : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DashboardAdmin;
