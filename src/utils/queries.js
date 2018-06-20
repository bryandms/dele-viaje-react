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
          numberOfVotes
          websiteUrl
          phone
          price
          email
          schedule
          photos
          services {
            name
            iconClass
            description
            price
          }
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
            username
            roles {
              name
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
    `
  },
  subscription: {}
};
