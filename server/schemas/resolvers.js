const { Product, Category } = require("../models");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find();
    },
    categories: async () => {
      return Category.find();
    },

    // products: async (parent, { productId }) => {
    //   return Product.findOne({ _id: productId });
    // },
  },
};

module.exports = resolvers;
