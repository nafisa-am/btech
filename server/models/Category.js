const { Schema, Types } = require("mongoose");

class Category extends Model {}

categorySchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
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
