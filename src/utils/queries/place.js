import gql from "graphql-tag";

export const createPlace = gql`
  mutation(
    $name: String!
    $description: String!
    $latitude: Float!
    $longitude: Float!
    $province: String!
    $accessibility: String!
    $category: String!
    $website: String!
    $phone: Int
    $price: Float
    $email: String!
  ) {
    createPlace(
      place: {
        name: $name
        description: $description
        latitude: $latitude
        longitude: $longitude
        province: $province
        accessibility: $accessibility
        category: $category
        website: $website
        phone: $phone
        price: $price
        email: $email
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
    }
  }
`;

export const allPlaces = gql`
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
`;

export const updatePlace = gql`
  mutation(
    $id: ID!
    $name: String!
    $description: String!
    $latitude: Float!
    $longitude: Float!
    $province: String!
    $accessibility: String!
    $category: String!
    $website: String!
    $phone: Int
    $price: Float
    $email: String!
  ) {
    updatePlace(
      id: $id
      place: {
        name: $name
        description: $description
        latitude: $latitude
        longitude: $longitude
        province: $province
        accessibility: $accessibility
        category: $category
        website: $website
        phone: $phone
        price: $price
        email: $email
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
    }
  }
`;

export const deletePlace = gql`
  mutation($id: ID!) {
    deletePlace(id: $id)
  }
`;

export const uploadImage = gql`
  mutation($file: FileUpload!, $placeId: Int!) {
    singleUpload(file: {
      file: $file, 
      placeId: $placeId
    }) {
      id
      path
      filename
    }
  }
`;