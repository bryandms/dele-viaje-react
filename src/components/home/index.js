import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "../errors/error";

const query = gql`
  {
    allUsers {
      id
      username
      email
      gender
      age
      favoritePlaces {
        id
        name
      }
    }
  }
`;

const userItem = (user, i) => <li key={i}>{user.username}</li>;

export default () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <Error />;
      return (
        <div>
          <ul>{data.allUsers.map(userItem)}</ul>
        </div>
      );
    }}
  </Query>
);
