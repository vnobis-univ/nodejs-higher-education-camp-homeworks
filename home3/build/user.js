"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const router = (0, express_1.Router)();
//     should have "list users" endpoint (list of ids and names)
router.get("/users", async (req, res) => {
    const users = await (0, db_1.listUsers)();
    res.json(users);
});
//     should have "read user by id" endpoint (only of id and name)
router.get("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const user = await (0, db_1.readUserById)(id);
    res.json(user);
});
//     should have "create user" endpoint with username as a required parameter
router.post("/users", async (req, res) => {
    const newUserData = req.body;
    const user = await (0, db_1.createUser)(newUserData.username);
    res.json(user);
});
//     should have "update user by id" endpoint
router.put("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const updatedUserData = req.body;
    const user = await (0, db_1.updateUserById)(id, updatedUserData);
    res.json(user);
});
exports.default = router;
//# sourceMappingURL=user.js.map