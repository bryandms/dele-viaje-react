import React from "react";
import { Card, Image, Rating, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import ModalPlace from "./modalPlace";

class ThumbnailPlace extends React.Component {
  render() {
    const style = {
      card: { margin: "10px" },
      img: { height: "200px", width: "100%" }
    };
    const { place } = this.props;

    return (
      <Card centered style={style.card}>
        <div className="hover">
          <Image
            className="card-img-transition"
            src={
              place.photos !== null
                ? place.photos.img1
                : "https://discountseries.com/wp-content/uploads/2017/09/default.jpg"
            }
            style={style.img}
          />
          <div className="middle">
            <ModalPlace place={place} />
            <Icon
              disabled
              name="heart"
              color="black"
              link={true}
              size="large"
            />
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
          {place.numberOfVotes === null
            ? "0"
            : (place.score / place.numberOfVotes).toFixed(1)}{" "}
          <Rating
            icon="star"
            defaultRating={place.score / place.numberOfVotes}
            maxRating={5}
            disabled
          />
        </Card.Content>
      </Card>
    );
  }
}

export default ThumbnailPlace;
