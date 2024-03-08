"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const BaseSchema_1 = require("./BaseSchema");
class Schema extends BaseSchema_1.BaseSchema {
    constructor(options) {
        super(options);
    }
    fromRoute(request, key) {
        const type = this.getType(request);
        let schemaOpts;
        switch (type) {
            case BaseSchema_1.TYPES.OBJECT:
                schemaOpts = this.objectTypeNode(request, type, key);
                break;
            case BaseSchema_1.TYPES.ARRAY:
                schemaOpts = this.arrayTypeNode(request, type, key);
                break;
            case BaseSchema_1.TYPES.NUMBER:
            case BaseSchema_1.TYPES.STRING:
                schemaOpts = this.primitiveTypeNode(request, type, key);
                break;
            default:
                throw new Error("Type not support");
        }
        return schemaOpts;
    }
    primitiveTypeNode(request, type, key) {
        return new Schema({
            type,
            example: request,
            name: key,
        });
    }
    arrayTypeNode(request, type, key) {
        const schema = this.fromRoute(request[0], key);
        return new Schema({
            type,
        }).addNode(schema);
    }
    objectTypeNode(request, type, key) {
        const keys = Object.keys(request);
        const schema = new Schema({ type });
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            schema.addNode(this.fromRoute(request[key], key), key);
        }
        return schema;
    }
}
exports.Schema = Schema;
