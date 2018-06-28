import React, { Component } from "react";
import { graphql } from "react-apollo";
import { allServices, createService } from "../../../utils/queries/service";
import Form from "./form";

class Create extends Component {
  handleSubmit = values => {
    const { name, price, icon } = values;
    const { mutate, alert } = this.props;
    mutate({
      variables: { name, price, icon },
      refetchQueries: [{ query: allServices }]
    })
      .then(res => {
        alert({
          success: "El servicio ha sido creado."
        });
      })
      .catch(error => {
        alert({
          danger: `El servicio no ha sido creado. ${
            error.graphQLErrors[0].message
          }`
        });
      });
  };

  render() {
    return (
      <Form
        modalId="addServiceModal"
        title="Añadir Servicio"
        handleSubmit={this.handleSubmit}
        service={this.props.service}
        open={this.props.open}
        close={this.props.close}
      />
    );
  }
}

export default graphql(createService)(Create);
