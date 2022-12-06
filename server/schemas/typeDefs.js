const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    product_name: String
    product_description: [String]
  }
  type Category {
    _id: ID
    category_name: String
  }
  type Brand {
    _id: ID
    brand_name: String
  }
  type Query {
    products: [Product]!
    product(productId: ID!): Product
    categories: [Category]!
    category(categoryId: ID!): Category
    brands: [Brand]!
    brand(brandId: ID!): Brand
  }

  type Mutation {
    addProduct(name: String!): Product
    addSkill(productId: ID!, skill: String!): Product
    removeProduct(productId: ID!): Product
    removeSkill(productId: ID!, skill: String!): Product
  }
`;

module.exports = typeDefs;
