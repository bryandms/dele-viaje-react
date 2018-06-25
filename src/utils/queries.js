import gql from "graphql-tag";

export default {
  query: {
    findPlaces: gql`
      query findPlaces(
        $province: String
        $accessibility: String
        $category: String
        $price: Float
      ) {
        findPlaces(
          place: {
            province: $province
            accessibility: $accessibility
            category: $category
            price: $price
          }
        ) {
          id
          name
          description
          latitude
          longitude
          province
          accessibility
          category
          score
          votes
          website
          phone
          price
          email
          schedule
          photos
          services {
            id
            name
            icon
            price
          }
        }
      }
    `,
    allPlaces: gql`
      {
        allPlaces {
          id
          name
          description
          latitude
          longitude
          province
          accessibility
          category
          score
          votes
          website
          phone
          price
          email
          schedule
          photos
          users {
            id
            username
          }
          services {
            id
            name
          }
        }
      }
    `,
    allServices: gql`
      {
        allServices {
          id
          name
          price
          icon
          places {
            id
            name
          }
        }
      }
    `,
    allUsers: gql`
      {
        allUsers {
          id
          username
          email
          gender
          age
        }
      }
    `
  },
  mutation: {
    login: gql`
      mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          success
          token
          user {
            id
            username
            email
            gender
            age
            roles {
              id
              name
            }
            favoritePlaces {
              id
              name
              description
              latitude
              longitude
              province
              accessibility
              category
              score
              votes
              website
              phone
              price
              email
              schedule
              photos
              services {
                id
                name
                icon
                price
              }
            }
          }
          errors {
            path
            message
          }
        }
      }
    `,
    register: gql`
      mutation(
        $username: String!
        $email: String!
        $password: String!
        $gender: String!
        $age: Int
      ) {
        register(
          user: {
            username: $username
            email: $email
            password: $password
            gender: $gender
            age: $age
          }
        ) {
          errors {
            path
            message
          }
          success
        }
      }
    `,
    addFavPlace: gql`
      mutation($placeId: ID!, $userId: ID!) {
        addFavPlace(placeId: $placeId, userId: $userId)
      }
    `,
    removeFavPlace: gql`
      mutation($placeId: ID!, $userId: ID!) {
        removeFavPlace(placeId: $placeId, userId: $userId)
      }
    `
  },
  subscription: {}
};
