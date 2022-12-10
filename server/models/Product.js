const { Schema, Types, model } = require("mongoose");

const productSchema = new Schema({
  brand: {
    type: String,
    require: true,
  },
  product_name: {
    type: String,
    require: true,
  },
  product_description: {
    type: String,
    trim: true,
  },

  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
  },
  image: {
    type: String,
    require: true,
  },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: "category",
  // },
});

const Product = model("Product", productSchema);

module.exports = Product;
