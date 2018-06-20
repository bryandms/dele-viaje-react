import React from "react";
import { Card, Grid, Header, Icon } from "semantic-ui-react";
import ThumbnailPlace from "./thumbnailPlace";

class SearchResult extends React.Component {
  render() {
    const places = this.props.places;
    const placeItem = (place, i) => <ThumbnailPlace place={place} key={i} />;
    const style = { padding: "3em" };

    return (
      <Grid.Row style={style}>
        <Header as="h2" icon textAlign="center">
          <Icon name="search" circular />
          <Header.Content>Resultado de la búsqueda</Header.Content>
        </Header>
        <Card.Group centered>{places.map(placeItem)}</Card.Group>
      </Grid.Row>
    );
  }
}

export default SearchResult;
