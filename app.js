"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./main"));
const me_1 = __importDefault(require("./me"));
let teacher = new me_1.default();
console.log(teacher.data);
let student = new main_1.default();
console.log(student.data);
