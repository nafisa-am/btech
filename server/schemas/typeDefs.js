const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Product {
    _id: ID
    product_name: String
    product_description: [String]
    price: Int 
    image: String
  }
  type Category {
    _id: ID
    category_name: String
  }
  type Brand {
    _id: ID
    brand_name: String
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
