"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSchema = exports.String2Type = exports.TYPES = void 0;
var TYPES;
(function (TYPES) {
    TYPES[TYPES["STRING"] = 0] = "STRING";
    TYPES[TYPES["NUMBER"] = 1] = "NUMBER";
    TYPES[TYPES["OBJECT"] = 2] = "OBJECT";
    TYPES[TYPES["ARRAY"] = 3] = "ARRAY";
    TYPES[TYPES["FILE"] = 4] = "FILE";
    TYPES[TYPES["BOOLEAN"] = 5] = "BOOLEAN";
})(TYPES || (exports.TYPES = TYPES = {}));
exports.String2Type = {
    string: TYPES.STRING,
    array: TYPES.ARRAY,
    boolean: TYPES.BOOLEAN,
    number: TYPES.NUMBER,
    object: TYPES.OBJECT,
};
class BaseSchema {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
        this.nodes = {};
        this.structures = {};
        this.type = (_a = options === null || options === void 0 ? void 0 : options.type) !== null && _a !== void 0 ? _a : TYPES.OBJECT;
        this.nullable = (_b = options === null || options === void 0 ? void 0 : options.nullable) !== null && _b !== void 0 ? _b : false;
        this.description = (_c = options === null || options === void 0 ? void 0 : options.description) !== null && _c !== void 0 ? _c : "";
        this.format = (_d = options === null || options === void 0 ? void 0 : options.format) !== null && _d !== void 0 ? _d : "";
        this.enum = options === null || options === void 0 ? void 0 : options.enum;
        this.example = options === null || options === void 0 ? void 0 : options.example;
        this.name = (_e = options === null || options === void 0 ? void 0 : options.name) !== null && _e !== void 0 ? _e : "";
        if (this.type === TYPES.NUMBER || this.type === TYPES.STRING)
            this.structures = {
                type: this.type === TYPES.STRING ? "string" : "number",
                example: this.example,
                description: (_f = this.description) !== null && _f !== void 0 ? _f : "",
                enum: this.enum,
                format: this.format,
            };
    }
    genSwagger() {
        return this.structures;
    }
    addNode(schema, key) {
        if (this.type === TYPES.ARRAY) {
            this.structures = {
                type: "array",
                items: schema.genSwagger(),
            };
            this.nodes[0] = schema;
        }
        else if (this.type === TYPES.OBJECT) {
            this.nodes[key !== null && key !== void 0 ? key : schema.name] = schema;
            this.structures = {
                type: "object",
                properties: Object.assign(Object.assign({}, this.structures.properties), { [key !== null && key !== void 0 ? key : schema.name]: schema.genSwagger() }),
            };
        }
        return this;
    }
    getType(value) {
        const type = {}.toString.call(value).split(" ")[1].slice(0, -1).toLowerCase();
        if (type === "number")
            return TYPES.NUMBER;
        if (type === "string")
            return TYPES.STRING;
        if (type === "object")
            return TYPES.OBJECT;
        if (type === "array")
            return TYPES.ARRAY;
        if (type === "boolean")
            return TYPES.BOOLEAN;
        if (typeof value === "object")
            return TYPES.OBJECT;
        throw new Error(`Type [${type}] not support - Value ${value}`);
    }
}
exports.BaseSchema = BaseSchema;
