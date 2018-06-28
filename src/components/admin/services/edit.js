import React, { Component } from "react";
import { graphql } from "react-apollo";
import { updateService } from "../../../utils/queries/service";
import Form from "./form";

class Edit extends Component {
  handleSubmit = values => {
    const { name, price, icon } = values;
    const { service, mutate, alert } = this.props;
    mutate({
      variables: {
        id: service.id,
        name,
        price,
        icon
      }
    })
      .then(res => {
        alert({
          success: "El servicio ha sido actualizado."
        });
      })
      .catch(error => {
        alert({
          danger: `El servicio no ha sido actualizado. ${
            error.graphQLErrors[0].message
          }`
        });
      });
  };

  render() {
    return (
      <Form
        modalId="editServiceModal"
        title="Editar Servicio"
        handleSubmit={this.handleSubmit}
        service={this.props.service}
        open={this.props.open}
        close={this.props.close}
      />
    );
  }
}

export default graphql(updateService)(Edit);
