"use strict";
//     should have "create user" endpoint with username as a required parameter
//     should have "read user by id" endpoint (only of id and name)
//     should have "list users" endpoint (list of ids and names)
//     should have "update user by id" endpoint
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.listUsers = exports.readUserById = exports.createUser = exports.DB = void 0;
let ID_COUNTER = 100;
exports.DB = [
    {
        id: 1,
        username: "user1"
    },
    {
        id: 2,
        username: "user2"
    }
];
const createUser = async (username) => {
    const userRecord = {
        id: ++ID_COUNTER,
        username
    };
    exports.DB.push(userRecord);
    return userRecord;
};
exports.createUser = createUser;
const readUserById = async (id) => {
    return exports.DB.find(user => user.id === id) || null;
};
exports.readUserById = readUserById;
const listUsers = async () => {
    return exports.DB;
};
exports.listUsers = listUsers;
const updateUserById = async (id, userUpdate) => {
    const index = exports.DB.findIndex(user => user.id === id);
    if (index === -1) {
        return null;
    }
    const dbUser = exports.DB[index];
    // update
    const updatedUser = {
        ...dbUser,
        ...userUpdate
    };
    exports.DB[index] = updatedUser;
    return updatedUser;
};
exports.updateUserById = updateUserById;
//# sourceMappingURL=db.js.map