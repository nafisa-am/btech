const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
// const { DB_NAME, DB_URL, MONGOOSE_OPTIONS } = require("./config/config");

// mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const db = require("./config/config");

const myvar = "random string";
// const db = mongoose.connection;

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
