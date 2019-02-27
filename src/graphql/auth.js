import { gql } from 'apollo-boost'

const loginMutation = gql `
  mutation(
    $email: String!,
    $password: String!
  ){
    login(
      email: $email,
      password: $password
    ){
      success
      data {
        ... on User {
          id
          username
          email
          roles {
            name
          }
          places {
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
            email
            schedule
            photos
            services {
              id
              name
              icon
            }
            userPlaces {
              id
              rating
            }
          }
        }
      }
      token
      errors {
        path
        message
      }
    }
  }
`

const registerMutation = gql `
  mutation(
    $username: String!
    $email: String!
    $password: String!
  ){
    register(
      user: {
        username: $username
        email: $email
        password: $password
      }
    ){
      success
      errors {
        path
        message
      }
    }
  }
`

export {
  loginMutation,
  registerMutation
}
