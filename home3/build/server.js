"use strict";
// Create web server using nodejs. This web server should follow REST standards and implement basic CRUD operations for a User entity. This server should also be built with express framework.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Notes:
//     use express & typescript
//     implement CRUD for a User entity
//     should have "create user" endpoint with username as a required parameter
//     should have "read user by id" endpoint (only of id and name)
//     should have "list users" endpoint (list of ids and names)
//     should have "update user by id" endpoint
//     do not use any database, store data locally in the memory of the process or in the file-system
const express_1 = __importStar(require("express"));
const user_1 = __importDefault(require("./user"));
const PORT = 8081;
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)());
app.use((req, res, next) => {
    console.log(`Incomming req ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send('Express +123 TypeScript Server');
});
app.use(user_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map