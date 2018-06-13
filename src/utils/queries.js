import gql from "graphql-tag";

export default {
  query: {},
  mutation: {
    login: gql`
      mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          success
          token
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
