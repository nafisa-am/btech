const { Schema, Types, model } = require("mongoose");

const brandSchema = new Schema({
  brand_name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

brandSchema.virtual("Products").get(function () {
  return this.products.length;
});

const Brand = model("Brand", brandSchema);

module.exports = Brand;
