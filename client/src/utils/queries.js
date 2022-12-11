import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query {
    products {
      _id
      image
      price
      product_description
      product_name
    }
  }
`;

export { GET_PRODUCTS };
