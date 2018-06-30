import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import { graphql } from "react-apollo";
import { allPlaces } from "../../../utils/queries/place";
import ListItem from "./listItem.js";
import Error from "../../errors/error";

class List extends React.Component {
  render() {
    const { loading, error, allPlaces } = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <Error />;
    }
    return (
      <Grid.Row className="padding-3">
        <Header as="h2" icon textAlign="center">
          <Header.Content>Lista de sitios turísticos</Header.Content>
        </Header>
        <Card.Group>
          {allPlaces.map(place => (
            <ListItem
              key={place.id}
              place={place}
              editPlace={this.props.editPlace}
              uploadImages={this.props.uploadImages}
              alert={this.props.alert}
            />
          ))}
        </Card.Group>
      </Grid.Row>
    );
  }
}

export default graphql(allPlaces)(List);
