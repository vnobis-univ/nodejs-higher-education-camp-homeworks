import * as repository from "./users.repository";

export const listUsers = async () => {
  return repository.listUsers();
};

export const readUserById = async (id: number) => {
  return repository.readUserById(id);
};

export const createUser = async (username: string) => {
  return repository.createUser(username);
};

export const updateUserById = async (id: number, userUpdate: repository.UserUpdate) => {
  return repository.updateUserById(id, userUpdate);
};

export const deleteUserById = async (id: number) => {
  return repository.deleteUserById(id);
};
