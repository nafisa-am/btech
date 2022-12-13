const { AuthenticationError } = require("apollo-server-express");
const { Product, Category, User, Order, Brand } = require("../models");
const { authMiddleware, signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find({});
    },
    categories: async () => {
      return Category.find({});
    },

    brands: async () => {
      return Brand.find({});
    },
    product: async (_, { productId }) => {
      try {
        return Product.findById({ _id: productId });
      } catch (error) {
        console.error(error);
      }
    },
    category: async (_, { categoryId }) => {
      try {
        return Category.findById({ _id: categoryId });
      } catch (error) {
        console.error(error);
      }
    },
    brand: async (_, { brandId }) => {
      try {
        return Brand.findById({ _id: brandId });
      } catch (error) {
        console.error(error);
      }
    },
    user: async (_, { userId }) => {
      try {
        return User.findById({ _id: userId });
      } catch (error) {
        console.error(error);
      }
    },

    // if (product) {
    //   params.category = category;
    // }

    // if (name) {
    //   params.name = {
    //     $regex: name
    //   };
    // }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // check if user exists with email and credentials
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPassword = await user.validatePassword(password);

      // check password
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { orders: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addProduct: async (parent, args, context) => {
      const newProduct = await Product.create(args);
      return newProduct;
    },
    addBrand: async (parent, args, context) => {
      const newBrand = await Brand.create(args);
      return newBrand;
    },
    addCategory: async (parent, args, context) => {
      const newCategory = await Category.create(args);
      return newCategory;
    },
  },
};

module.exports = resolvers;
