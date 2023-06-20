import { Router, Request, Response } from "express";

import { listUsers, readUserById, createUser, updateUserById, deleteUserById } from "./users.repository";

const router: Router = Router();

//     should have "list users" endpoint (list of ids and names)
router.get("/users", async (req: Request, res: Response) => {
  const users = await listUsers();
  res.json(users);
});

//     should have "read user by id" endpoint (only of id and name)
router.get("/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await readUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User with such ID does\'t exist' });
  }
});

//     should have "create user" endpoint with username as a required parameter
router.post("/users", async (req: Request, res: Response) => {
  const newUserData = req.body;
  const user = await createUser(newUserData.username);
  res.json(user);
});

//     should have "update user by id" endpoint
router.put("/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedUserData = req.body;
  const user = await updateUserById(id, updatedUserData);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User with such ID does\'t exist' });
  }
});

//      should have "delete user by id" endpoint
router.delete("/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await deleteUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User with such ID does\'t exist' });
  }
});

export default router;
