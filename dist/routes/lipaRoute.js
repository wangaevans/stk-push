"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//lipaRoute.ts
const express_1 = __importDefault(require("express"));
const stkController_1 = require("../controllers/stkController");
const generateToken_1 = require("../middlewares/generateToken");
const router = express_1.default.Router();
router.post("/stkpush", generateToken_1.generateToken, stkController_1.handleStkPush);
exports.default = router;
