import React, { Component } from "react";
import { graphql } from "react-apollo";
import { updatePlace } from "../../../utils/queries/place";
import Form from "./form";

class Edit extends Component {
  handleSubmit = values => {
    const {
      name,
      description,
      latitude,
      longitude,
      province,
      accessibility,
      category,
      website,
      phone,
      price,
      email
    } = values;
    const { place, mutate, alert } = this.props;
    mutate({
      variables: {
        id: place.id,
        name,
        description,
        latitude,
        longitude,
        province,
        accessibility,
        category,
        website,
        phone,
        price,
        email
      }
    })
      .then(res => {
        alert({
          success: "El sitio ha sido actualizado."
        });
      })
      .catch(error => {
        alert({
          danger: `El sitio no ha sido actualizado. ${
            error.graphQLErrors[0].message
          }`
        });
      });
  };

  render() {
    return (
      <Form
        modalId="editPlaceModal"
        title="Editar Sitio Turístico"
        handleSubmit={this.handleSubmit}
        place={this.props.place}
        open={this.props.open}
        close={this.props.close}
      />
    );
  }
}

export default graphql(updatePlace)(Edit);
