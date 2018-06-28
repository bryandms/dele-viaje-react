import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import icons from "../../../utils/icons";

class ServiceForm extends Component {
  state = {
    name: "",
    price: 0,
    icon: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.service && !this.props.service) {
      const { name, price, icon } = nextProps.service;
      this.setState({ name, price, icon });
    }
  }

  handleSubmit = e => {
    const { name, price, icon } = this.state;
    e.preventDefault();
    this.props.handleSubmit({ name, price, icon });
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
    const { name, price, icon } = this.state;

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
                name="icon"
                fluid
                options={icons}
                placeholder="Ícono"
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

export default ServiceForm;
