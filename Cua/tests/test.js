"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const Schema_1 = require("../Plugins/Schemas/Schema");
let schema = joi_1.default.object().keys({
    name: joi_1.default.string().alphanum().min(3).max(30).required(),
    birthyear: joi_1.default.number().integer().min(1970).max(2013),
    title: joi_1.default.string().alphanum().min(3).max(30).required(),
    description: joi_1.default.string().length(255).optional(),
    comments: joi_1.default.array().items(joi_1.default.object().keys({
        description: joi_1.default.string(),
        author: joi_1.default.string().required(),
        grade: joi_1.default.number().min(1).max(5),
    })),
    pets: joi_1.default.array().items(joi_1.default.string()),
    news: joi_1.default.number().invalid(1, 2, 3, 4, 5),
    createdAt: joi_1.default.date(),
    type: joi_1.default.number().valid(1, 2, 3),
});
const aSchema = new Schema_1.Schema(schema).optional("*");
console.log(aSchema.decorations);
