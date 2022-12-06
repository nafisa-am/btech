const db = require("../config/config");
const { Category, Order, Product, User, Brands } = require("../models");
const categorySeeds = require("./categoryData.json");
const brandSeeds = require("./brandData.json");
const productSeeds = require("./productData.json");

db.once("open", async () => {
  try {
    await Category.deleteMany({});
    await Category.create(categorySeeds);
    await Product.deleteMany({});
    await Product.create(productSeeds);
    // await Brands.deleteMany({});
    // await Brands.create(brandSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
