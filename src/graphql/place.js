import { gql } from 'apollo-boost'

const findPlacesQuery = gql `
  query findPlaces(
    $province: String
    $accessibility: String
    $category: String
  ){
    findPlaces(
      place: {
        province: $province
        accessibility: $accessibility
        category: $category
      }
    ){
      success
      data {
        ... on Place {
          id
          name
          description
          accessibility
          category
          score
          votes
          photos
          userPlaces {
            userId
          }
        }
      }
      errors {
        path
        message
      }
    }
  }
`

const placeQuery = gql `
  query place(
    $id: ID!
  ){
    place(
      id: $id
    ){
      success
      data {
        ... on Place {
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
            userId
          }
        }
      }
      errors {
        path
        message
      }
    }
  }
`

export {
  findPlacesQuery,
  placeQuery
}
