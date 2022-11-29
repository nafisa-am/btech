const mongoose = require("mongoose");

const DB_NAME = process.env.DB_NAME || "btech_db";
const DB_URL = process.env.MONGODB_URI || `mongodb://127.0.0.1/${DB_NAME}`;
const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = { DB_NAME, DB_URL, MONGOOSE_OPTIONS };
