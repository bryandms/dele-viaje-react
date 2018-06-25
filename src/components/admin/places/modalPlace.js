import React from "react";
import { Image, Icon, Modal, Header } from "semantic-ui-react";

class ModalPlace extends React.Component {
  render() {
    const place = this.props.place;

    return (
      <Modal
        trigger={
          <Icon disabled name="eye" color="black" link={true} size="large" />
        }
        centered={false}
      >
        <Modal.Header>{place.name}</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src={
              place.photos !== null
                ? place.photos.img1
                : "https://discountseries.com/wp-content/uploads/2017/09/default.jpg"
            }
          />
          <Modal.Description>
            {place.description ? (
              <div>
                <Header>Descripción</Header>
                <p>{place.description}</p>
              </div>
            ) : null}
            {place.province ? (
              <p>
                <Icon name="map marker alternate" color="black" />
                {place.province}
              </p>
            ) : null}
            {place.accessibility ? (
              <p>
                <Icon name="car" color="black" />
                {place.accessibility}
              </p>
            ) : null}
            {place.category ? (
              <p>
                <Icon name="certificate" color="black" />
                {place.category}
              </p>
            ) : null}
            {place.website ? (
              <p>
                <Icon name="linkify" color="black" />
                <a href={place.website} target="_blank">
                  {place.website}
                </a>
              </p>
            ) : null}
            {place.phone ? (
              <p>
                <Icon name="phone" color="black" />
                {place.phone}
              </p>
            ) : null}
            {place.price ? (
              <p>
                <Icon name="money" color="black" />
                {place.price}
              </p>
            ) : null}
            {place.email ? (
              <p>
                <Icon name="mail" color="black" />
                {place.email}
              </p>
            ) : null}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalPlace;
