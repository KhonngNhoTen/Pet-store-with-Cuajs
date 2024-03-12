"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const joi_1 = __importDefault(require("joi"));
const Joi2SchemaDecoration_1 = require("./Joi2SchemaDecoration");
const clone_1 = __importDefault(require("clone"));
class Schema {
    constructor(schema, examples) {
        if (!schema)
            return;
        if (joi_1.default.isSchema(schema))
            this.validations = schema;
        else
            this.validations = joi_1.default.compile(schema);
        this.decorations = (0, Joi2SchemaDecoration_1.parseDecorations)(this.validations.describe());
        this.examples = examples;
    }
    optional(fields) {
        return this;
    }
    required(fields) {
        return this;
    }
    remove(fields) {
        return this;
    }
    add(field) {
        return this;
    }
    merge(schema) {
        return this;
    }
    clone() {
        return (0, clone_1.default)(this);
    }
}
exports.Schema = Schema;
