import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import ThumbnailPlace from "../home/thumbnailPlace";

class SearchResult extends React.Component {
  render() {
    const places = this.props.places;
    const placeItem = (place, i) => (
      <ThumbnailPlace place={place} key={i} user={this.props.user} />
    );

    return (
      <Grid.Row className="padding-3">
        <Header as="h2" icon textAlign="center">
          <Header.Content>Lugares turísticos favoritos</Header.Content>
        </Header>
        <Card.Group centered>{places.map(placeItem)}</Card.Group>
      </Grid.Row>
    );
  }
}

export default SearchResult;
