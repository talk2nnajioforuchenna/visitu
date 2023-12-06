import { DataSource } from "typeorm";
import { Person } from "./entity/Person";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite", // Update with the path to your SQLite database file
  entities: [Person], // Add all your entities here
  synchronize: true, // Automatically creates the database tables on startup (use with caution in production)
  logging: false,
});

// Initialize the data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized! from data-source.ts");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
