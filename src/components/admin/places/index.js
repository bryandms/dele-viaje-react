import React, { Component } from "react";
import { Label, Icon } from "semantic-ui-react";
import PlaceList from "./list";
import CreatePlace from "./create";
import EditPlace from "./edit";
import Alert from "../../Alert";

class Place extends Component {
  state = {
    addPlace: null,
    editPlace: null,
    alert: "",
    openAdd: false,
    openEdit: false,
    openUploadImage: false
  };

  addPlace = () => {
    this.setState({
      addPlace: {
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
      },
      openAdd: true,
      openEdit: false,
      openUploadImage: false
    });
  };

  editPlace = place => {
    this.setState({
      editPlace: place,
      openAdd: false,
      openUploadImage: false,
      openEdit: true
    });
  };

  close = () => {
    this.setState({
      addPlace: null,
      editPlace: null,
      openAdd: false,
      openEdit: false,
      openUploadImage: false
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

  uploadImages = place => {
    this.setState({
      editPlace: place,
      openAdd: false,
      openEdit: false,
      openUploadImage: true
    });
  };

  render() {
    return (
      <div>
        <Alert alert={this.state.alert} />
        <Label className="add" color="black" onClick={this.addPlace}>
          <Icon name="plus" />Añadir sitio turístico
        </Label>
        <PlaceList alert={this.alert} editPlace={this.editPlace} uploadImages={this.uploadImages} />
        <CreatePlace
          place={this.state.addPlace}
          close={this.close}
          alert={this.alert}
          open={this.state.openAdd}
        />
        <EditPlace
          place={this.state.editPlace}
          close={this.close}
          alert={this.alert}
          open={this.state.openEdit}
        />
        {this.state.openUploadImage && (
          <UploadImage
            place={this.state.editPlace}
            close={this.close}
            alert={this.alert}
          />
        )}
      </div>
    );
  }
}

export default Place;
