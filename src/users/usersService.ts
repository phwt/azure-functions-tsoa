import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

const users: User[] = [
  {
    id: 1,
    email: "jane@doe.com",
    name: "Jane Doe",
    status: "Happy",
    phoneNumbers: ["000000000"],
  },
  {
    id: 2,
    email: "john@doe.com",
    name: "John Doe",
    status: "Sad",
    phoneNumbers: ["000000000"],
  },
];

export class UsersService {
  public list(): User[] {
    return users;
  }

  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}
