import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

const Error = () => {
  return (
    <Grid className="grid-errors">
      <Grid.Row centered textAlign="center">
        <Icon circular name="frown outline" color="grey" size="huge" />
      </Grid.Row>
      <Grid.Row centered textAlign="center">
        <Header as="h1">Algo ha salido mal</Header>
      </Grid.Row>
      <Grid.Row centered textAlign="center">
        <a href="/">Vuelve al inicio</a>
      </Grid.Row>
    </Grid>
  );
};

export default Error;
