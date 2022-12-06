const db = require("../config/config");
const { Category, Order, Product, User, Brand } = require("../models");
const categorySeeds = require("./categoryData.json");
const brandSeeds = require("./brandData.json");
const productSeeds = require("./productData.json");
const orderSeeds = require("./orderData.json");
const userSeeds = require("./userData.json");

db.once("open", async () => {
  try {
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Brand.deleteMany({});
    await Order.deleteMany({});
    await User.deleteMany({});

    console.log("Databases cleared!");

    await Product.create(productSeeds);
    await Brand.create(brandSeeds);
    await Category.create(categorySeeds);

    const productsFromDB = await Product.find({});

    const ordersToSeed = orderSeeds.map((order) => {
      return {
        ...order,
        products: [
          productsFromDB[Math.floor(Math.random() * productsFromDB.length)]._id,
        ],
      };
    });

    await Order.create(ordersToSeed);
    console.log("Orders Seeded!");

    const ordersFromDB = await Order.find({});

    const usersToSeed = userSeeds.map((user) => {
      return {
        ...user,
        orders: [
          ordersFromDB[Math.floor(Math.random() * ordersFromDB.length)]._id,
        ],
      };
    });

    await User.create(usersToSeed);

    console.log("Done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
