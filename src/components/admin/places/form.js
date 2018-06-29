import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { provinces, accessibilities, categories } from "../../../utils/selects";

class PlaceForm extends Component {
  state = {
    name: "",
    description: "",
    latitude: 0,
    longitude: 0,
    province: "",
    accessibility: "",
    category: "",
    website: "",
    phone: 0,
    price: 0,
    email: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.place && !this.props.place) {
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
      } = nextProps.place;
      this.setState({
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
      });
    }
  }

  handleSubmit = e => {
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
    } = this.state;
    e.preventDefault();
    this.props.handleSubmit({
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
    });
    this.props.close();
  };

  handleOnChangeSelect = (e, input) => {
    this.setState({
      [input.name]: input.value
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { close, modalId, title, open } = this.props;
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
    } = this.state;

    return (
      <Modal id={modalId} open={open} onOpen={this.open} centered={false}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Nombre</label>
              <input
                required
                type="text"
                name="name"
                value={name}
                placeholder="Nombre"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Descripción</label>
              <textarea
                required
                type="text"
                name="description"
                value={description}
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Latitud</label>
              <input
                required
                type="number"
                name="latitude"
                min="0"
                step="any"
                value={latitude}
                placeholder="Latitud"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Longitud</label>
              <input
                required
                type="number"
                name="longitude"
                step="any"
                value={longitude}
                placeholder="Longitud"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Precio</label>
              <input
                required
                type="number"
                name="price"
                min="0"
                value={price}
                placeholder="Precio"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <Form.Select
                onChange={this.handleOnChangeSelect}
                name="province"
                fluid
                options={provinces}
                value={province}
                placeholder="Provincia"
              />
            </Form.Field>

            <Form.Field>
              <Form.Select
                onChange={this.handleOnChangeSelect}
                name="accessibility"
                fluid
                options={accessibilities}
                value={accessibility}
                placeholder="Accesibilidad"
              />
            </Form.Field>

            <Form.Field>
              <Form.Select
                onChange={this.handleOnChangeSelect}
                name="category"
                fluid
                options={categories}
                value={category}
                placeholder="category"
              />
            </Form.Field>

            <Form.Field>
              <label>Teléfono</label>
              <input
                required
                type="number"
                name="phone"
                min="0"
                value={phone}
                placeholder="Teléfono"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Sitio Web</label>
              <input
                type="text"
                name="website"
                value={website}
                placeholder="Sitio Web"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Correo</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Sitio Web"
                onChange={this.handleOnChange}
              />
            </Form.Field>

            <Button color="blue" type="submit">
              Enviar
            </Button>

            <Button color="black" type="button" onClick={close}>
              Cerrar
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default PlaceForm;
