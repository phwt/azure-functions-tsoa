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

  public get(id: number): User {
    const user = users.find((user) => user.id === id);
    if (user) return user;
    throw new Error("User not found!");
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }

  public update(id: number, userUpdateParams: UserCreationParams): User {
    const user = users.find((user) => user.id === id);
    if (user) return { ...user, ...userUpdateParams };
    throw new Error("User not found!");
  }

  public delete(id: number): User {
    return this.get(id);
  }
}
