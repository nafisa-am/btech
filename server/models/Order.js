const { Schema, Types, model } = require("mongoose");

const orderSchema = new Schema(
  {
    shipping: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    shippingAddressOne: {
      type: String,
    },
    shippingAddressTwo: {
      type: String,
    },
    shippingProvince: {
      type: String,
    },
    shippingCounty: {
      type: String,
    },
    shippingPostcode: {
      type: String,
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
