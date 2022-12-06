const { Schema, Types, model } = require("mongoose");

const categorySchema = new Schema({
  category_name: {
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

categorySchema
  .virtual("Products")
  // Getter
  .get(function () {
    return this.products.length;
  });

const Category = model("category", categorySchema);

module.exports = Category;
