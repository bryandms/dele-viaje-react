import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Grid className="grid-errors">
      <Grid.Row centered textAlign="center">
        <Icon circular name="map outline" color="grey" size="huge" />
      </Grid.Row>
      <Grid.Row centered textAlign="center">
        <Header as="h1">¿Extraviado?</Header>
      </Grid.Row>
      <Grid.Row centered textAlign="center">
        <a href="/">Vuelve al inicio</a>
      </Grid.Row>
    </Grid>
  );
};

export default NotFound;
