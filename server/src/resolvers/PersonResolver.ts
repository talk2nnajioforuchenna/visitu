import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Person } from "../entity/Person";
import { AppDataSource } from "../data-source";
import { getRelativeDate } from "../helperFunctions/getRelativeDate";

@Resolver()
export class PersonResolver {
  @Mutation(() => Person)
  async addPerson(
    @Arg("name") name: string,
    @Arg("birthday") birthday: Date
  ): Promise<Person> {
    const person = new Person();
    person.name = name;
    person.birthday = birthday;
    return await AppDataSource.manager.save(person);
  }

  @Query(() => [Person])
  async allPeople(): Promise<Person[]> {
    const people = await AppDataSource.manager.find(Person);
    return people.map((person) => ({
      ...person,
      relativeDate: getRelativeDate(person.birthday),
    }));
  }
}
