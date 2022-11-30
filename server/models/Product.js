const { Schema, Types, model } = require("mongoose");

const productSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  product_name: {
    type: String,
    require: true,
  },
  product_description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,

    require: true,
  },
  stock: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
