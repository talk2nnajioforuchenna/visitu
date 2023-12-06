import { createTestClient } from "apollo-server-testing";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PersonResolver } from "../src/resolvers/PersonResolver";
import { AppDataSource } from "../src/data-source";
import { Person } from "../src/entity/Person";

describe("PersonResolver", () => {
  let personResolver: PersonResolver;

  beforeAll(async () => {
    // Initialize database connection, etc.
    await AppDataSource.initialize();
    personResolver = new PersonResolver();
  });

  afterAll(async () => {
    // Close database connection
    await AppDataSource.destroy();
  });

  const testCases = [
    {
      name: "Alex Smith",
      birthday: new Date("2023-09-01"),
      expected: "3 months ago",
    },
    {
      name: "Maria Garcia",
      birthday: new Date("2023-12-03"),
      expected: "3 days ago",
    },
    // Add more test cases for hours and minutes as per your current time
  ];

  testCases.forEach(({ name, birthday, expected }) => {
    it(`should return '${expected}' for ${name}`, async () => {
      await personResolver.addPerson(name, birthday);
      const people = await personResolver.allPeople();
      const addedPerson = people.find((p) => p.name === name);

      expect(addedPerson).toBeDefined();
      expect(addedPerson?.relativeDate).toBe(expected);
    });
  });
});

// describe("Person Resolver", () => {
//   let testClient: any; // Explicitly declaring as any to avoid TypeScript errors

//   beforeAll(async () => {
//     const schema = await buildSchema({
//       resolvers: [PersonResolver],
//     });

//     const server = new ApolloServer({ schema });

//     // @ts-ignore: Suppress TypeScript errors related to createTestClient
//     testClient = createTestClient(server);
//   });

//   it("addPerson mutation should create a new person", async () => {
//     // @ts-ignore: Suppress TypeScript errors related to testClient
//     const result = await testClient.mutate({
//       mutation: `mutation {
//         addPerson(name: "John Doe", birthday: "2000-01-01") {
//           id
//           name
//           birthday
//         }
//       }`,
//     });

//     expect(result.data).toBeDefined();
//     expect(result.errors).toBeUndefined();
//     expect(result.data.addPerson.name).toBe("John Doe");
//     // Further assertions...
//   });

//   // Additional tests for allPeople query...
// });
