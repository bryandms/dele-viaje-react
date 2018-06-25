import React from "react";
import { Card, Grid, Header, Icon } from "semantic-ui-react";
import ThumbnailPlace from "./thumbnailPlace";

class FavPlaces extends React.Component {
  render() {
    const places = this.props.places;
    const placeItem = (place, i) => (
      <ThumbnailPlace place={place} key={i} user={this.props.user} />
    );

    return (
      <Grid.Row className="padding-3">
        <Header as="h2" icon textAlign="center">
          <Icon name="search" circular />
          <Header.Content>Resultado de la búsqueda</Header.Content>
        </Header>
        <Card.Group centered>{places.map(placeItem)}</Card.Group>
      </Grid.Row>
    );
  }
}

export default FavPlaces;
