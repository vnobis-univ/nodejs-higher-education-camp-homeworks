//     should have "create user" endpoint with username as a required parameter
//     should have "read user by id" endpoint (only of id and name)
//     should have "list users" endpoint (list of ids and names)
//     should have "update user by id" endpoint

export type User = {
  id: number;
  username: string;
};

export type UserUpdate = {
  username?: string;
};

let ID_COUNTER = 100;

export const DB: User[] = [
  {
    id: 1,
    username: "user1",
  },
  {
    id: 2,
    username: "user2",
  },
];

export const createUser = async (username: string): Promise<User> => {
  const userRecord: User = {
    id: ++ID_COUNTER,
    username,
  };

  DB.push(userRecord);
  return userRecord;
};

export const readUserById = async (id: number): Promise<User | null> => {
  return DB.find((user) => user.id === id) || null;
};

export const listUsers = async (): Promise<User[]> => {
  return DB;
};

export const updateUserById = async (id: number, userUpdate: UserUpdate): Promise<User | null> => {
  const index = DB.findIndex((user) => user.id === id);

  if (index === -1) {
    return null;
  }

  const dbUser = DB[index];

  // update
  const updatedUser = {
    ...dbUser,
    ...userUpdate,
  };

  DB[index] = updatedUser;
  return updatedUser;
};
