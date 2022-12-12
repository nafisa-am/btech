const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    name: String
    address: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: String
    user: User
  }

  type Product {
    _id: ID
    brand: String
    product_name: String
    product_description: [String]
    price: Int
    stock: Int
    image: String
  }
  type Category {
    _id: ID
    category_name: String
    products: [Product]
  }
  type Brand {
    _id: ID
    brand_name: String
    products: [Product]
  }
  type Order {
    _id: ID
    shipping: String
    products: [Product]
    shippingAddressOne: String
    shippingAddressTwo: String
    shippingProvince: String
    shippingCounty: String
    shippingPostcode: String
  }
  type Query {
    user(userId: ID!): User
    products: [Product]!
    product(productId: ID): Product
    categories: [Category]!
    category(categoryId: ID!): Category
    brands: [Brand]
    brand(brandId: ID!): Brand
  }

  input signupInput {
    username: String!
    email: String!
    name: String!
    password: String!
    address: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      name: String!
      password: String!
      address: String!
    ): Auth
    addProduct(
      brand: String
      product_name: String
      product_description: [String]
      price: Int
      stock: Int
      image: String
    ): Product
    addOrder(orderID: ID!): Order
    removeProduct(productId: ID!): Product
    addBrand(brandId: ID!): Brand
    addCategory(categoryId: ID!): Category
  }
`;

module.exports = typeDefs;
