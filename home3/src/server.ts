// Create web server using nodejs. This web server should follow REST standards and implement basic CRUD operations for a User entity. This server should also be built with express framework.

// Notes:
//     use express & typescript
//     implement CRUD for a User entity
//     should have "create user" endpoint with username as a required parameter
//     should have "read user by id" endpoint (only of id and name)
//     should have "list users" endpoint (list of ids and names)
//     should have "update user by id" endpoint
//     do not use any database, store data locally in the memory of the process or in the file-system

import express, { json, urlencoded, Express } from "express";

import userAPI from "./user";

const PORT = 8081;

const app: Express = express();
app.use(json());
app.use(urlencoded());

// APIs
app.use(userAPI);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
