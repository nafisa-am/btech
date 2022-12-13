import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query {
    products {
      _id
      brand
      image
      price
      product_description
      product_name
      stock
    }
  }
`;

const GET_BRANDS = gql`
  query Query {
    brands {
      _id
      brand_name
    }
  }
`;

export { GET_PRODUCTS, GET_BRANDS };
