import React, { Component } from "react";
import { Label, Icon } from "semantic-ui-react";
import ServiceList from "./list";
import CreateService from "./create";
import EditService from "./edit";
import Alert from "../../Alert";

class Service extends Component {
  state = {
    addService: null,
    editService: null,
    alert: "",
    openAdd: false,
    openEdit: false
  };

  addService = () => {
    this.setState({
      addService: {
        name: "",
        price: 0,
        icon: ""
      },
      openAdd: true,
      openEdit: false
    });
  };

  editService = service => {
    this.setState({
      editService: service,
      openAdd: false,
      openEdit: true
    });
  };

  close = () => {
    this.setState({
      addService: null,
      editService: null,
      openAdd: false,
      openEdit: false
    });
  };

  alert = msg => {
    this.setState({
      alert: {
        type: Object.keys(msg)[0],
        message: Object.values(msg)[0]
      }
    });
  };

  render() {
    return (
      <div>
        <Alert alert={this.state.alert} />
        <Label className="add" color="black" onClick={this.addService}>
          <Icon name="plus" />Añadir servicio
        </Label>
        <ServiceList alert={this.alert} editService={this.editService} />
        <CreateService
          service={this.state.addService}
          close={this.close}
          alert={this.alert}
          open={this.state.openAdd}
        />
        <EditService
          service={this.state.editService}
          close={this.close}
          alert={this.alert}
          open={this.state.openEdit}
        />
      </div>
    );
  }
}

export default Service;
