"use strict";
//timeStamp.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = void 0;
const date = new Date();
exports.timestamp = date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
