import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql``;

export const ADD_USER = gql`
  mutation Mutation(
    $username: String!
    $email: String!
    $name: String!
    $password: String!
    $address: String!
  ) {
    addUser(
      username: $username
      email: $email
      name: $name
      password: $password
      address: $address
    ) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
