"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getadmins = exports.getusers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany({
        select: {
            email: true,
            name: true,
            branch: true,
            role: true,
        }
    });
    if (!users) {
        res.json({
            message: "Users Not Found"
        });
        return;
    }
    res.json({
        users: users
    });
});
exports.getusers = getusers;
const getadmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = prisma.user.findMany({
        where: {
            role: "ADMIN"
        }
    });
    res.status(200).json({
        admins: admins
    });
});
exports.getadmins = getadmins;
