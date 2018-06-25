import React from "react";
import { graphql, compose } from "react-apollo";
import { Button, Card, Image, Rating, Icon } from "semantic-ui-react";

import queries from "../../../utils/queries";
import ModalPlace from "./modalPlace";

class ThumbnailPlace extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async (event, args) => {
    event.preventDefault();
    const { place, user } = args;
    args = { placeId: place, userId: user };
    let response = await this.props.addFavPlace({
      variables: args
    });

    if (response.data.addFavPlace) {
      console.log("se anadio");
    } else {
      response = await this.props.removeFavPlace({
        variables: args
      });
      if (response.data.removeFavPlace) {
        console.log("se removio el lugar");
      }
    }
  };

  render() {
    const { place, user } = this.props;

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
            <ModalPlace place={place} />
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

export default compose(
  graphql(queries.mutation.addFavPlace, { name: "addFavPlace" }),
  graphql(queries.mutation.removeFavPlace, { name: "removeFavPlace" })
)(ThumbnailPlace);
