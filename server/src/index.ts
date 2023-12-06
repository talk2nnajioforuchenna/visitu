import { DataSource } from "typeorm";
import { Person } from "./entity/Person";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PersonResolver } from "./resolvers/PersonResolver";
import express from "express";

// Initialize DataSource
const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [__dirname + "/entity/**/*.js"],
  synchronize: true,
  logging: false,
});

async function initializeDataSource() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.error("Error during Data Source initialization", error);
    throw error; // Re-throw to handle it in the caller function
  }
}

async function startApolloServer() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [PersonResolver],
    validate: false,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  server.applyMiddleware({ app, path: "/person" });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/person`);
  });
}

async function startServer() {
  await initializeDataSource();
  await startApolloServer();
}

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});
