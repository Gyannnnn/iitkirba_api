"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const year_controller_1 = require("../../controller/yearController/year.controller");
const yearrouter = (0, express_1.Router)();
yearrouter.get("/");
yearrouter.post("/create", year_controller_1.createyear);
exports.default = yearrouter;