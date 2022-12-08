const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Product {
    _id: ID
    name: String
    description: [String]
    price: FLOAT 
    image: String
  }
  type Category {
    _id: ID
    name: String
  }
  type Brand {
    _id: ID
    name: String
  }
  type Order {
    _id: ID
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
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addProduct(name: String!): Product
    addOrder(orderID: ID!): Order
    removeProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
