import React from "react";
import { Card, Grid, Header, Icon } from "semantic-ui-react";

class UserList extends React.Component {
  render() {
    const users = this.props.users;
    const userItem = (user, i) => (
      <Card key={i} centered className="margin-10">
        <Card.Content textAlign="center">
          <Card.Header>{user.username}</Card.Header>
          <Card.Meta>
            <Icon disabled name={user.gender === "M" ? "male" : "female"} />
            <span className="date">Edad: {user.age}</span>
          </Card.Meta>
          <Card.Description>
            <Icon name="mail" />
            {user.email}
          </Card.Description>
        </Card.Content>
      </Card>
    );

    return (
      <Grid.Row className="padding-3">
        <Header as="h2" icon textAlign="center">
          <Header.Content>Lista de usuarios</Header.Content>
        </Header>
        <Card.Group>{users.map(userItem)}</Card.Group>
      </Grid.Row>
    );
  }
}

export default UserList;
