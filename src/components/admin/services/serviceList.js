import React from "react";
import { Card, Grid, Header, Icon, Label } from "semantic-ui-react";
import { graphql, compose } from "react-apollo";

import queries from "../../../utils/queries";

class ServiceList extends React.Component {
  handleClick = async event => {
    event.preventDefault();
    const { service } = event.target.attributes;
    const args = { id: service.value };
    let response = await this.props.deleteService({
      variables: args
    });

    if (response.data.deleteService) {
      console.log("se elimino");
    } else {
      console.log("No se pudo remover el servicio");
    }
  };

  render() {
    const services = this.props.services;
    const serviceItem = (service, i) => (
      <Card key={i} centered className="margin-10">
        <Card.Content textAlign="center">
          <Label attached="bottom" color="black">
            <Icon
              disabled
              service={service.id}
              onClick={this.handleClick}
              name="trash"
              link={true}
            />
          </Label>
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

export default compose(
  graphql(queries.mutation.deleteService, { name: "deleteService" })
)(ServiceList);
