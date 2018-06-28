import gql from "graphql-tag";

export const createService = gql`
  mutation($name: String!, $price: Float!, $icon: String!) {
    createService(service: { name: $name, price: $price, icon: $icon }) {
      id
      name
      price
      icon
    }
  }
`;

export const allServices = gql`
  {
    allServices {
      id
      name
      price
      icon
    }
  }
`;

export const updateService = gql`
  mutation($id: ID!, $name: String!, $price: Float!, $icon: String!) {
    updateService(id: $id, service: { name: $name, price: $price, icon: $icon }) {
      id
      name
      price
      icon
    }
  }
`;

export const deleteService = gql`
  mutation($id: ID!) {
    deleteService(id: $id)
  }
`;
