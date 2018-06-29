import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import { graphql } from "react-apollo";
import { allServices } from "../../../utils/queries/service";
import ListItem from "./listItem.js";
import Error from "../../errors/error";

class List extends React.Component {
  render() {
    const { loading, error, allServices } = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <Error />;
    }
    return (
      <Grid.Row className="padding-3">
        <Header as="h2" icon textAlign="center">
          <Header.Content>Lista de servicios</Header.Content>
        </Header>
        <Card.Group>
          {allServices.map(service => (
            <ListItem
              key={service.id}
              service={service}
              editService={this.props.editService}
              alert={this.props.alert}
            />
          ))}
        </Card.Group>
      </Grid.Row>
    );
  }
}

export default graphql(allServices)(List);
