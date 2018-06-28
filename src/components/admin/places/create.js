import React, { Component } from "react";
import { graphql } from "react-apollo";
import { allPlaces, createPlace } from "../../../utils/queries/place";
import Form from "./form";

class Create extends Component {
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
    const { mutate, alert } = this.props;
    mutate({
      variables: {
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
      },
      refetchQueries: [{ query: allPlaces }]
    })
      .then(res => {
        alert({
          success: "El sitio ha sido creado."
        });
      })
      .catch(error => {
        alert({
          danger: `El sitio no ha sido creado. ${
            error.graphQLErrors[0].message
          }`
        });
      });
  };

  render() {
    return (
      <Form
        modalId="addPlaceModal"
        title="Añadir Sitio Turístico"
        handleSubmit={this.handleSubmit}
        place={this.props.place}
        open={this.props.open}
        close={this.props.close}
      />
    );
  }
}

export default graphql(createPlace)(Create);
