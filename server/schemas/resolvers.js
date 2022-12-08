const { Product, Category, User, Order, Brand } = require("../models");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find();
    },
    categories: async () => {
      return Category.find();
    },

    // if (product) {
    //   params.category = category;
    // }

    // if (name) {
    //   params.name = {
    //     $regex: name
    //   };
    // }
    // products: async (parent, { productId }) => {
    //   return Product.findOne({ _id: productId });
    // },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // check if user exists with email and credentials
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPassword = await user.isCorrectPassword(password);

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
  },
};

module.exports = resolvers;
