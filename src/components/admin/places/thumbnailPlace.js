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
    const { place } = args;
    args = { id: place };
    let response = await this.props.deletePlace({
      variables: args
    });

    if (response.data.deletePlace) {
      console.log("se elimino");
    } else {
      console.log("No se pudo remover el lugar");
    }
  };

  render() {
    const { place } = this.props;

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
            <Button
              basic
              inverted
              place={place.id}
              onClick={this.handleClick}
              icon={
                <Icon
                  disabled
                  name="trash"
                  color="black"
                  link={true}
                  size="large"
                />
              }
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
  graphql(queries.mutation.deletePlace, { name: "deletePlace" })
)(ThumbnailPlace);
