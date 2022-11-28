const { Schema, Types } = require("mongoose");
const Product = require("./Product");

class Order extends Model {}

const orderSchema = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    shipping: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true,
      },
      allowNull: false,
    },
    lineItems: [Products],
    shippingAddress1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingAddress2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shippingProvince: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingCounty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingPostcode: {
      type: DataTypes.STRING,
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
  .virtual("Products")
  // Getter
  .get(function () {
    return this.products.price.sum;
  });

const Order = model("order", orderSchema);

module.exports = Order;
