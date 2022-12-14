const mongoose = require("mongoose");

// const DB_NAME = process.env.DB_NAME || "btechdb";
// const DB_URL = process.env.MONGODB_URI || `mongodb://127.0.0.1/${DB_NAME}`;
// const MONGOOSE_OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// module.exports = { DB_NAME, DB_URL, MONGOOSE_OPTIONS };

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dreamTeam:L9ZVp2nxLXLmYXRG@btech.w5lybf0.mongodb.net/btech",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
