import { Router, Request, Response } from "express";

import { listUsers, readUserById, createUser, updateUserById } from "./db";

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
  res.json(user);
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
  res.json(user);
});

export default router;
