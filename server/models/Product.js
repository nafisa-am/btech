const { Schema, Types } = require("mongoose");

class Product extends Model {}

productSchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    validate: {
      isDecimal: true,
    },
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    validate: {
      isNumeric: true,
    },
    allowNull: false,
    defaultValue: 10,
  },
});

const Product = model("product", productSchema);
module.exports = Product;
