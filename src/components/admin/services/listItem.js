import React, { Component } from "react";
import { graphql } from "react-apollo";
import { allServices, deleteService } from "../../../utils/queries/service";
import { Card, Icon, Label } from "semantic-ui-react";

class ListItem extends Component {
  handleDeleteService = e => {
    const { deleteService, service, alert } = this.props;
    deleteService({
      variables: {
        id: service.id
      },
      refetchQueries: [{ query: allServices }]
    })
      .then(res => {
        alert({
          success: "El servicio se ha eliminado correctamente."
        });
      })
      .catch(error => {
        alert({
          danger: "El servicio no se ha eliminado."
        });
      });
  };

  handleEditService = () => {
    this.props.editService(this.props.service);
  };

  render() {
    const service = this.props.service;
    return (
      <Card centered className="margin-10">
        <Card.Content textAlign="center">
          <Label className="padding-0" attached="bottom" color="black">
            <Label color="black">
              <Icon
                disabled
                service={service.id}
                onClick={this.handleDeleteService}
                name="trash"
                link={true}
              />
            </Label>
            <Label color="black">
              <Icon
                disabled
                service={service.id}
                onClick={this.handleEditService}
                name="pencil"
                link={true}
              />
            </Label>
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
  }
}

export default graphql(deleteService, { name: "deleteService" })(ListItem);
