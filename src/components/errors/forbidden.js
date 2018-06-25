import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

const Forbidden = () => {
  return (
    <Grid className="grid-errors">
      <Grid.Row centered textAlign="center">
        <Icon circular name="dont" color="grey" size="huge" />
      </Grid.Row>
      <Grid.Row centered textAlign="center">
        <Header as="h1">Acceso denegado</Header>
      </Grid.Row>
      <Grid.Row centered textAlign="center">
        <a href="/">Vuelve al inicio</a>
      </Grid.Row>
    </Grid>
  );
};

export default Forbidden;
