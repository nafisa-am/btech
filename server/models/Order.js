const { Schema, Types, model } = require("mongoose");
const Product = require("./Product");

const orderSchema = new Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    shipping: {
      type: Number,

      allowNull: false,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    shippingAddress1: {
      type: String,
      allowNull: false,
    },
    shippingAddress2: {
      type: String,
      allowNull: true,
    },
    shippingProvince: {
      type: String,
      allowNull: false,
    },
    shippingCounty: {
      type: String,
      allowNull: false,
    },
    shippingPostcode: {
      type: String,
      allowNull: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);

orderSchema
  .virtual("totalProductsPrice")
  // Getter
  .get(function () {
    return this.Products.price.sum;
  });

const Order = model("Order", orderSchema);

module.exports = Order;
