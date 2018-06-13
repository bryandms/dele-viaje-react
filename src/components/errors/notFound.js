import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

const style = { top: "30%", position: "fixed", width: "100%" };

const NotFound = () => {
  return (
    <Grid style={style}>
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
