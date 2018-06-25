import React from "react";
import { Card, Grid, Header, Icon } from "semantic-ui-react";

class ServiceList extends React.Component {
  render() {
    const services = this.props.services;
    const serviceItem = (service, i) => (
      <Card key={i} centered className="margin-10">
        <Card.Content textAlign="center">
          <Icon className="margin-10" name={service.icon} circular size="big" />
          <Card.Header>{service.name}</Card.Header>
          <Card.Meta>
            Precio:
            <span className="date">{service.price}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    );

    return (
      <Grid.Row className="padding-3">
        <Header as="h2" icon textAlign="center">
          <Header.Content>Lista servicios</Header.Content>
        </Header>
        <Card.Group>{services.map(serviceItem)}</Card.Group>
      </Grid.Row>
    );
  }
}

export default ServiceList;
