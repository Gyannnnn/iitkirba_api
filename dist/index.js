"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
console.log("User routes resolved path:", path_1.default.resolve('./routes/user.routes.ts'));
console.log("Auth routes resolved path:", path_1.default.resolve('./routes/auth.routes.ts'));
//files import
const userrouter_1 = __importDefault(require("./routes/userrouter"));
const authrouter_1 = __importDefault(require("./routes/authrouter"));
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routes
app.use("/api/user", userrouter_1.default);
app.use("/api/user/auth", authrouter_1.default);
app.listen(process.env.PORT || 6000, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
});
