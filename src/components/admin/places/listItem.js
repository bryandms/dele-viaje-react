import React, { Component } from "react";
import { graphql } from "react-apollo";
import { allPlaces, deletePlace } from "../../../utils/queries/place";
import { Card, Image, Rating, Icon, Label } from "semantic-ui-react";
import Show from "./show";

class ListItem extends Component {
  handleDeletePlace = e => {
    const { deletePlace, place, alert } = this.props;
    deletePlace({
      variables: {
        id: place.id
      },
      refetchQueries: [{ query: allPlaces }]
    })
      .then(res => {
        alert({
          success: "El sitio se ha eliminado correctamente."
        });
      })
      .catch(error => {
        alert({
          danger: "El sitio no se ha eliminado."
        });
      });
  };

  handleEditPlace = () => {
    this.props.editPlace(this.props.place);
  };

  render() {
    const place = this.props.place;
    return (
      <Card centered className="margin-10">
        <div className="hover">
          <Image
            className="card-img-transition img-thumbnail"
            src={
              place.photos !== null
                ? place.photos.img1
                : "https://discountseries.com/wp-content/uploads/2017/09/default.jpg"
            }
          />
          <div className="middle">
            <Show place={place} />
            <Label className="transparent padding-0">
              <Icon
                size="large"
                disabled
                color="black"
                place={place.id}
                onClick={this.handleDeletePlace}
                name="trash"
                link={true}
              />
            </Label>
            <Label className="transparent padding-0">
              <Icon
                size="large"
                disabled
                color="black"
                place={place.id}
                onClick={this.handleEditPlace}
                name="pencil"
                link={true}
              />
            </Label>
          </div>
        </div>

        <Card.Content>
          <Card.Header>{place.name}</Card.Header>
          <Card.Meta>
            <span className="date">
              {place.category} | {place.accessibility}
            </span>
          </Card.Meta>
          <Card.Description>{place.description}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          {place.votes === null ? "0" : (place.score / place.votes).toFixed(1)}{" "}
          <Rating
            icon="star"
            defaultRating={place.score / place.votes}
            maxRating={5}
            disabled
          />
        </Card.Content>
      </Card>
    );
  }
}

export default graphql(deletePlace, { name: "deletePlace" })(ListItem);
